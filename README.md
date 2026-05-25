# EFEKTA T1 MAX Temperature Sensor

Temperature sensor with external DS18B20 probe in a sealed capsule, 3 meters cable, with extended functionality (thermostat). Powered via USB Type-C with backup power from 2 AA batteries. Available in two firmware variants.

![EFEKTA-T1-MAX](https://raw.githubusercontent.com/smartboxchannel/EFEKTA-T1-MAX/refs/heads/main/Images/6.png) 

## Firmware Variants

### Router (EFEKTA_T1_MAX_R)
- **Primary power:** USB
- **Backup power:** 2 AA batteries (~15 days)
- Operates as a Zigbee router, extending mesh network coverage

### End Device (EFEKTA_T1_MAX_E)
- **Primary power:** USB or batteries
- Operates in ultra-low power consumption mode
- Ideal for battery-powered applications with long battery life

## Key Features

- **Dual power supply** with automatic switchover
- **Power failure detection:** When USB power is lost, the sensor automatically switches to battery backup and sends a mains power loss notification to the network
- External DS18B20 temperature probe in sealed capsule (3m cable)
- Built-in thermostat functionality
- Suitable for harsh environments: outdoors, boiler rooms, attics, cellars, saunas, baths, etc.

## Compatibility

| Platform | Support |
|----------|---------|
| Home Assistant (ZHA) | Full |
| Home Assistant (Zigbee2MQTT) | Full |
| OpenHAB | Full |
| ioBroker | Full |
| MajorDoMo | Full |
| Sprut Hub | Full |
| Yandex Zigbee Hub | Limited |

## Use Cases

- Outdoor temperature monitoring
- Boiler room temperature control
- Cold storage and cellar monitoring
- Sauna and bath temperature measurement
- HVAC system integration
- Power supply monitoring with outage detection
