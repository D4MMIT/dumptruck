    req = Request.Request(url)
    for header in HEADERS:
        req.add_header(header, HEADERS[header])

    try:
        with Request.urlopen(req) as response:
            time.sleep(1)            
            html = response.read()
    except Request.HTTPError as e:
        print("error")

        exit()
    

    session = requests.Session()
    req = session.get(url, headers=HEADERS, timeout=(3.05,27))

    parser = BeautifulSoup(html, 'html.parser')
    x = parser.findAll('span', {'class':_class})[0].text.strip()

        response = requests.get(url, headers=HEADERS, timeout=(100.05,527))
        parser = BeautifulSoup(response.content, 'html.parser')
        o = parser.findAll('span', {'class':_class})[0].text.strip()