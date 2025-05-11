import requests;
from datetime import datetime;
import smtplib;
from email.mime.text import MIMEText;
from email.mime.multipart import MIMEMultipart



def register_en_archivo(url, mensaje):
    with open("regitro.txt", "a") as archivo:
        timestamp = datetime.now().strftime("%Y-%m-%d %H/%M/%S")
        archivo.write(f"[{timestamp}] -> {url} ---> {mensaje}\n")

def enviar_mail(url, mensaje):
    remitente = "mpiccato@gmail.com"
    destinatario = "mpiccato@me.com"
    asunto = "Alerta de error de la API"
    cuerpo = f"Se ha verificado el sitio {url} con el siguiente resultado: {mensaje}"

    msg = MIMEMultipart()
    msg["from"] = remitente
    msg["To"] = destinatario
    msg["Subject"] = asunto

    msg.attach(MIMEText(cuerpo, "plain"))

    print("Enviando correo...")

    try:
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.login(remitente, "0407L&L1996")
        text = msg.as_string()
        server.sendmail(remitente, destinatario, text)
        server.quit()
        print("Correo enviado con éxito")
    except Exception as e:
        print(f"Error al enviar el correo: {e}")
        register_en_archivo(url, f"Error al enviar el correo: {e}")

def verificar_sitio(url):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            mensaje = f"El sitio {url} está activo"
            print(mensaje)
            register_en_archivo(url, mensaje)
        else:
            mensaje = f'El sitio {url} está inactivo, código de estado: {response.status_code}'
            print(mensaje)
            register_en_archivo(url, mensaje)
    except requests.exceptions.RequestException as e:
        mensaje = f"Error al verificar el sitio {url}: {e}"
        print(mensaje)
        register_en_archivo(url, mensaje)
        enviar_mail(url, mensaje)


def main():
    sitios = {
        "Google": "https://www.google.com",
        "Facebook": "https://www.facebook.com",
        "Twitter": "https://www.twitter.com",
        "Instagram": "https://www.instagram.com",
        "LinkedIn": "https://www.linkedin.com",
        "YouTube": "https://www.youtube.com",
        "Reddit": "https://www.reddit.com",
        "Pinterest": "https://www.pinterest.com",
        "Tumblr": "https://www.tumblr.com",
        
    }
    for nombre, url in sitios.items():
        print(f"Verificando {nombre}...")
        verificar_sitio(url)
    

if __name__ == "__main__":
    main()