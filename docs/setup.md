

In /boot folder do the following:
```shell script
sudo echo "dtoverlay=dwc2" | sudo tee -a /boot/config.txt
sudo echo "dwc2" | sudo tee -a /etc/modules
sudo echo "libcomposite" | sudo tee -a /etc/modules

touch ssh

sudo usermod -a -G dialout pi
```


Create a file called `wpa_supplicant.conf` with the following content:

`country=IT
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
network={
ssid="SSID"
psk="PASSWORD"
key_mgmt=WPA-PSK
}`