#!/bin/bash
cd /sys/kernel/config/usb_gadget/
mkdir -p safepi
cd safepi
echo 0x1d6b > idVendor # Linux Foundation
echo 0x0104 > idProduct # Multifunction Composite Gadget
echo 0x0100 > bcdDevice # v1.0.0
echo 0x0200 > bcdUSB # USB2
mkdir -p strings/0x409
echo "fedcba9876543210" > strings/0x409/serialnumber
echo "SafePI Foundation" > strings/0x409/manufacturer
echo "SafePI" > strings/0x409/product
mkdir -p configs/c.1/strings/
# Add functions here
mkdir -p functions/acm.usb0
ln -s functions/acm.usb0 configs/c.1/
# End functions
ls /sys/class/udc > UDC

