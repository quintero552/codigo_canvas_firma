import msal
import requests

# Configura los detalles de autenticación
client_id = "<tu_client_id>"
client_secret = "<tu_client_secret>"
redirect_uri = "<tu_redirect_uri>"
authority = "https://login.microsoftonline.com/common"

# Inicializa el objeto de autenticación de MSAL
app = msal.ConfidentialClientApplication(
    client_id=client_id,
    client_credential=client_secret,
    authority=authority
)

# Realiza la solicitud de token de acceso
result = app.acquire_token_by_client_credentials(
    scopes=["https://graph.microsoft.com/.default"]
)

# Verifica si se obtuvo el token de acceso correctamente
if "access_token" in result:
    # Usa el token de acceso para realizar una solicitud a la API de OneDrive
    access_token = result["access_token"]
    headers = {
        "Authorization": "Bearer " + access_token,
        "Content-Type": "application/json"
    }
    response = requests.get(
        "https://graph.microsoft.com/v1.0/me/drive/root/children",
        headers=headers
    )
    
    # Procesa la respuesta
    if response.status_code == 200:
        data = response.json()
        for item in data["value"]:
            print(item["name"])
    else:
        print("Error al realizar la solicitud:", response.text)
else:
    print("Error al obtener el token de acceso:", result.get("error_description"))
