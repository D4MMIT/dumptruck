import requests
from bs4 import BeautifulSoup
import urllib.request as Request
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys



ID_PERSPECTIVE = "QXROIe"
HEADERS = {
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9',
    'authorization': 'SAPISIDHASH 0c1d7156306dd866460ddbdd892995f10eba0527',
    'content-type': 'text/plain;charset=UTF-8',
    # 'cookie': 'SEARCH_SAMESITE=CgQI2poB; OGPC=19037049-1:; SID=g.a000hwh8a-rpTVoWZce1WGZYeJE6-bl_JJDIQt93Z7EcrvvN942Uywd8wFW0Qhp62LIu9fQoQAACgYKAb0SAQASFQHGX2Mi8KqH-OribVcg4_4t8Q6v2BoVAUF8yKrTHriSuaJmbiZtUws8Lnbp0076; __Secure-1PSID=g.a000hwh8a-rpTVoWZce1WGZYeJE6-bl_JJDIQt93Z7EcrvvN942UGKvlDnIgDcu6gGJiMVS6wgACgYKAUkSAQASFQHGX2Mi6QZ_lf-ujPuMQ135BoRXuxoVAUF8yKolK7QitY5J7EMrThPp3FTk0076; __Secure-3PSID=g.a000hwh8a-rpTVoWZce1WGZYeJE6-bl_JJDIQt93Z7EcrvvN942U2PJphGGBV1-2B6LwXcwbtwACgYKATQSAQASFQHGX2MiaOEWCMNnufK-kzZTTiSgBxoVAUF8yKrxWAqPvblmAxmBTwleavr50076; HSID=A1B_LeGwPKm9hH3gk; SSID=ARs01kBg-G7mnCHdu; APISID=Z9COTxo3JyDCnnI8/AO2qTUqTlWLeAjqQo; SAPISID=0wS8YnU9NbewagEQ/AC8ma169in19oZtDk; __Secure-1PAPISID=0wS8YnU9NbewagEQ/AC8ma169in19oZtDk; __Secure-3PAPISID=0wS8YnU9NbewagEQ/AC8ma169in19oZtDk; AEC=Ae3NU9OIYiuDY7HpqJb90uQi9I6-HFL0vuncU6nqI3XAyiV5ZmtLWYd6d8Y; 1P_JAR=2024-03-29-19; NID=512=I-iF54mQ9pHqqNI4_IwW220d8lrEJDHw7GNXBx1bdTrOjDjmBfbZx2Khhg5UQGoNM3SDT1Qb07mQLtrB6XY3rOKjlI0LitbzU80RaMBWwWmuem7-cqSTmFT2ZesALLZ7bwjl5Kbs7f0GXLHZXRVMISZKs93GMZFfV6BjenRU-N17-4IyGA2K5WgKzS8peq82Pz8bUccj_WONdxkovF7hMPFy1MAefpDuqPGhUlSJ9LCjMCUl4B-F4isac4dCfoodovvkqVz85w1Hms72gCfTdZ5KqlkjerGaG56Ox8Jmd3r_z0pqPgqupG-KA48ENqVIhFUEqBSUSLJdia5nO_lnboHv_nDJ1UMFlPxoVe93lCwoiAP4HEMzVDGOI-MesoCyssVNwqMuQI4pqrBeur7jgr8682XsylgpsaE2Gf1pHc2wTmnQEnFlyW8vSs-sdoEBTHmXw0F8RPE; __Secure-1PSIDTS=sidts-CjIB7F1E_M_W1wiqqUwdinTK-fzNikmDvpGeENd0JeKS4W5pqRRMYFAh2YgQIQzSEaKfNRAA; __Secure-3PSIDTS=sidts-CjIB7F1E_M_W1wiqqUwdinTK-fzNikmDvpGeENd0JeKS4W5pqRRMYFAh2YgQIQzSEaKfNRAA; SIDCC=AKEyXzU71GkjmL7jK_Yqh7M7z3n2rII1Ozie10WCcL0ZdOiFPehwb_hEJwa6HTz_IP2PdE8U5q8; __Secure-1PSIDCC=AKEyXzWKwG4uMZe6UVRPA1JEya7b5RCTKeYp0zpElucZNxqD2rhoPVyQ8Ru5b94eypmLKmlx6p0; __Secure-3PSIDCC=AKEyXzUOxJ5ysXqqoYTw5rjgx-Tp7JZIPN-XTGJHFwZIhyuqRNgBIiohmfuwCz_HGeXpwgMNS59v',
    'origin': 'https://ogs.google.com',
    'referer': 'https://ogs.google.com/',
    'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
    'x-client-data': 'CIm2yQEIorbJAQipncoBCK7mygEIlKHLAQid/swBCIWgzQEI3PzNAQjGgM4BGPTJzQEY0oLOARjrjaUX',
    'x-goog-authuser': '0',
}

DEFAULT_COOKIES = {
    'SEARCH_SAMESITE': 'CgQI2poB',
    'OGPC': '19037049-1:',
    'SID': 'g.a000hwh8a-rpTVoWZce1WGZYeJE6-bl_JJDIQt93Z7EcrvvN942Uywd8wFW0Qhp62LIu9fQoQAACgYKAb0SAQASFQHGX2Mi8KqH-OribVcg4_4t8Q6v2BoVAUF8yKrTHriSuaJmbiZtUws8Lnbp0076',
    '__Secure-1PSID': 'g.a000hwh8a-rpTVoWZce1WGZYeJE6-bl_JJDIQt93Z7EcrvvN942UGKvlDnIgDcu6gGJiMVS6wgACgYKAUkSAQASFQHGX2Mi6QZ_lf-ujPuMQ135BoRXuxoVAUF8yKolK7QitY5J7EMrThPp3FTk0076',
    '__Secure-3PSID': 'g.a000hwh8a-rpTVoWZce1WGZYeJE6-bl_JJDIQt93Z7EcrvvN942U2PJphGGBV1-2B6LwXcwbtwACgYKATQSAQASFQHGX2MiaOEWCMNnufK-kzZTTiSgBxoVAUF8yKrxWAqPvblmAxmBTwleavr50076',
    'HSID': 'A1B_LeGwPKm9hH3gk',
    'SSID': 'ARs01kBg-G7mnCHdu',
    'APISID': 'Z9COTxo3JyDCnnI8/AO2qTUqTlWLeAjqQo',
    'SAPISID': '0wS8YnU9NbewagEQ/AC8ma169in19oZtDk',
    '__Secure-1PAPISID': '0wS8YnU9NbewagEQ/AC8ma169in19oZtDk',
    '__Secure-3PAPISID': '0wS8YnU9NbewagEQ/AC8ma169in19oZtDk',
    'AEC': 'Ae3NU9OIYiuDY7HpqJb90uQi9I6-HFL0vuncU6nqI3XAyiV5ZmtLWYd6d8Y',
    '1P_JAR': '2024-03-29-19',
    'NID': '512=I-iF54mQ9pHqqNI4_IwW220d8lrEJDHw7GNXBx1bdTrOjDjmBfbZx2Khhg5UQGoNM3SDT1Qb07mQLtrB6XY3rOKjlI0LitbzU80RaMBWwWmuem7-cqSTmFT2ZesALLZ7bwjl5Kbs7f0GXLHZXRVMISZKs93GMZFfV6BjenRU-N17-4IyGA2K5WgKzS8peq82Pz8bUccj_WONdxkovF7hMPFy1MAefpDuqPGhUlSJ9LCjMCUl4B-F4isac4dCfoodovvkqVz85w1Hms72gCfTdZ5KqlkjerGaG56Ox8Jmd3r_z0pqPgqupG-KA48ENqVIhFUEqBSUSLJdia5nO_lnboHv_nDJ1UMFlPxoVe93lCwoiAP4HEMzVDGOI-MesoCyssVNwqMuQI4pqrBeur7jgr8682XsylgpsaE2Gf1pHc2wTmnQEnFlyW8vSs-sdoEBTHmXw0F8RPE',
    '__Secure-1PSIDTS': 'sidts-CjIB7F1E_M_W1wiqqUwdinTK-fzNikmDvpGeENd0JeKS4W5pqRRMYFAh2YgQIQzSEaKfNRAA',
    '__Secure-3PSIDTS': 'sidts-CjIB7F1E_M_W1wiqqUwdinTK-fzNikmDvpGeENd0JeKS4W5pqRRMYFAh2YgQIQzSEaKfNRAA',
    'SIDCC': 'AKEyXzU71GkjmL7jK_Yqh7M7z3n2rII1Ozie10WCcL0ZdOiFPehwb_hEJwa6HTz_IP2PdE8U5q8',
    '__Secure-1PSIDCC': 'AKEyXzWKwG4uMZe6UVRPA1JEya7b5RCTKeYp0zpElucZNxqD2rhoPVyQ8Ru5b94eypmLKmlx6p0',
    '__Secure-3PSIDCC': 'AKEyXzUOxJ5ysXqqoYTw5rjgx-Tp7JZIPN-XTGJHFwZIhyuqRNgBIiohmfuwCz_HGeXpwgMNS59v',
}

tickers_p = ["btc", "bnb", "eth"]

CCC_APIKEY = "ecc95ae0-4bc9-4016-9bef-2bdf4900357c"



chrome_options = Options()
chrome_options.add_experimental_option("detach", True)
driver = webdriver.Chrome(options=chrome_options)


def url_gen(ticker):
    url = "https://www.google.com/search?q="+ticker
    response = requests.get(url, headers=HEADERS, cookies=DEFAULT_COOKIES)

    parser = BeautifulSoup(response.content, 'html.parser')
    parsed_c = []


    for _ in parser.find_all('span'):
        x = _.get_text()
        parsed_c.append(x)

    print(parsed_c)

def get_price(tickers):
    _class = "sc-f70bb44c-0 jxpCgO base-text"
    values = {}

    for ticker in tickers:  
        url = 'https://coinmarketcap.com/currencies/'+ticker+'/' 
        driver.get(url)
        time.sleep(10)
        parser = BeautifulSoup(driver.page_source, 'html.parser')
        dollar_amt= parser.findAll('span', {'class':_class})[0].text.strip()
        values[ticker] = float(dollar_amt.replace("$", ""))

    return values

    #driver.find_element_by_id('search_term').send_keys('.')

#url_gen(tickers_p[0])
values = get_price(["tamadoge", "singularitynet", "district0x"])
print(values)