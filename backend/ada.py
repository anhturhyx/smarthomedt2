from flask import Flask, request, jsonify
from Adafruit_IO import Client, MQTTClient
from flask_cors import CORS
import sys
import requests
from datetime import datetime

ADAFRUIT_IO_USERNAME = "sylvia1910"
ADAFRUIT_IO_KEY = "aio_PVZx79X4NZpx0RmGoi0WGi5C4zVp"

SERVER_URL = 'http://localhost:7000'  # Replace with your server URL

app = Flask(__name__)
cors = CORS(app)
aio = Client(ADAFRUIT_IO_USERNAME, ADAFRUIT_IO_KEY)
client = MQTTClient(ADAFRUIT_IO_USERNAME, ADAFRUIT_IO_KEY)

feeds = {
    'sslight': None,
    'sstemp': None,
    'ssmoist': None,
    'ctlight-slash': None
}

def connected(client):
    print("Connected successfully...")
    for feed_id in feeds.keys():
        if feed_id != 'ctlight-slash':
            client.subscribe(feed_id)


def subscribe(client, userdata, mid, granted_qos):
    print("Subscribe successful...")


def disconnected(client):
    print("Disconnected...")
    sys.exit(1)


def message(client, feed_id, payload):
    print("Received data: " + payload)
    send_data_to_server(feed_id, payload)


def send_data_to_server(feed_id, data):
    # Include timestamp
    timestamp = datetime.now().isoformat()

    # Send a POST request to the server
    url = SERVER_URL + '/data'  # Replace '/data' with the appropriate endpoint on your server
    payload = {'feed_id': feed_id, 'value': data, 'timestamp': timestamp}  # Include timestamp in the payload
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, json=payload, headers=headers)
    if response.status_code == 200:
        print('Data sent to server successfully')
    else:
        print('Failed to send data to server')


@app.route('/data', methods=['POST'])
def receive_data():
    data = request.json
    feed_id = data.get('feed_id')
    value = data.get('value')
    timestamp = data.get('timestamp')
    feeds[feed_id] = {'value': value, 'timestamp': timestamp}
    print('Received data:', data)

    if feed_id == 'ctlight-slash':
        switch_value = value
        set_switch_value(switch_value)

    return 'Data received successfully'


def set_switch_value(value):
    try:
        aio.send('ctlight-slash', int(value))  # Send the value to the 'ctlight-slash' feed on Adafruit IO
        print('Switch value set to:', value)
    except Exception as e:
        print('Failed to set switch value:', str(e))


@app.route('/data', methods=['GET'])
def get_data():
    return jsonify(feeds)


if __name__ == '__main__':
    client.on_connect = connected
    client.on_message = message
    client.on_disconnect = disconnected
    client.on_subscribe = subscribe
    client.connect()
    client.loop_background()

    app.run(port=7000)
