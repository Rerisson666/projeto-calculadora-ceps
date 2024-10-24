from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import csv
import requests

app = FastAPI()

# Configuração de CORS para permitir requisições do frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Ajuste conforme o endereço do frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Sua chave de API do Google Maps
API_KEY = ""

def calcular_distancia_cep(cep_a: str, cep_b: str):
    url = f"https://maps.googleapis.com/maps/api/distancematrix/json?origins={cep_a}&destinations={cep_b}&key={API_KEY}"
    response = requests.get(url).json()

    # Para debugging: imprimir a resposta da API
    print(response)

    if 'rows' not in response or len(response['rows']) == 0:
        return None

    try:
        if response['rows'][0]['elements'][0]['status'] == 'OK':
            distancia_metros = response['rows'][0]['elements'][0]['distance']['value']
            distancia_km = distancia_metros / 1000
            return distancia_km
        else:
            return None
    except (IndexError, KeyError):
        return None

@app.post("/upload_csv/")
async def upload_csv(file: UploadFile = File(...)):
    content = await file.read()
    decoded_content = content.decode("utf-8").splitlines()
    reader = csv.DictReader(decoded_content)

    resultados = []

    for row in reader:
        cep_a = row['CEP_A']
        cep_b = row['CEP_B']
        distancia = calcular_distancia_cep(cep_a, cep_b)

        if distancia is not None:
            resultados.append({
                "CEP_A": cep_a,
                "CEP_B": cep_b,
                "Distancia_km": distancia
            })
        else:
            resultados.append({
                "CEP_A": cep_a,
                "CEP_B": cep_b,
                "Erro": "Distância não encontrada ou CEP inválido"
            })

    return {"resultados": resultados}