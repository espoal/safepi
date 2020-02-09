

In /boot folder do the following:



`touch ssh`

Create a file called `wpa_supplicant.conf` with the following content:

`country=IT
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
network={
ssid="SSID"
psk="PASSWORD"
key_mgmt=WPA-PSK
}`