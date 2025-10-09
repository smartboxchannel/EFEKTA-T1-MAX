// ############################################################################//
//                                                                             //
//    ... перезагрузить z2m, что бы конвертер применился                       //
//                                                                             //
//#############################################################################//

const {
    numeric,
	binary,
	enumLookup,
	temperature,
	reporting,
	identify,
	battery,
} = require('zigbee-herdsman-converters/lib/modernExtend');

const fourReporting = {min: 10, max: 1800, change: 5};
const fiveReporting = {min: 1800, max: 10600, change: 1};


const definition = {
        zigbeeModel: ["EFEKTA_T1_MAX_R"],
        model: "EFEKTA_T1_MAX_R",
        vendor: "EFEKTA",
        description: "Temperatureb mart monitor with voltage detector",
        extend: [
		    identify(),
            temperature({
                reporting: fourReporting,
                access: "STATE",
            }),
            numeric({
                name: "mains_voltage",
                unit: "V",
                cluster: "genPowerCfg",
                attribute: "mainsVoltage",
                description: "Mains voltage",
                scale: 10,
                precision: 1,
                access: "STATE_GET",
            }),
            battery({
                percentage: true,
                lowStatus: true,
                voltage: false,
                percentageReporting: true,
                percentageReportingConfig: fiveReporting,
            }),
            numeric({
                name: "lifetime",
                unit: "Hours",
                cluster: "genTime",
                attribute: "localTime",
                description: "Uptime",
                access: "STATE",
            }),
            numeric({
                name: "reading_interval",
                unit: "sec",
                valueMin: 3,
                valueMax: 300,
                cluster: "genPowerCfg",
                attribute: {ID: 0x0201, type: 0x21},
                description: "Setting the sensor reading interval in seconds, by default 5 seconds",
                access: "STATE_SET",
            }),
            enumLookup({
                name: "tx_radio_power",
                lookup: {"4dbm": 4, "19dbm": 19},
                cluster: "genPowerCfg",
                attribute: {ID: 0x0236, type: 0x28},
                description: "Set TX Radio Power, dbm",
                access: "STATE_SET",
            }),
			enumLookup({
                name: "resolution",
                lookup: {"9 bit": 9, "10 bit": 10, "11 bit": 11, "12 bit": 12},
                cluster: "msTemperatureMeasurement",
                attribute: {ID: 0x0520, type: 0x20},
                description: "Set Bit resolution DS18B20",
                access: "STATE_SET",
            }),
            binary({
                name: "config_report_enable",
                valueOn: ["ON", 1],
                valueOff: ["OFF", 0],
                cluster: "genPowerCfg",
                attribute: {ID: 0x0275, type: 0x10},
                description: "Enable reporting based on reporting configuration",
                access: "STATE_SET",
            }),
            binary({
                name: "comparison_previous_data",
                valueOn: ["ON", 1],
                valueOff: ["OFF", 0],
                cluster: "genPowerCfg",
                attribute: {ID: 0x0205, type: 0x10},
                description: "Enable сontrol of comparison with previous data",
                access: "STATE_SET",
            }),
			binary({
                name: "enable_temperature",
                valueOn: ["ON", 1],
                valueOff: ["OFF", 0],
                cluster: "msTemperatureMeasurement",
                attribute: {ID: 0x0220, type: 0x10},
                description: "Enable Temperature Control",
                access: "STATE_SET",
            }),
            binary({
                name: "invert_logic_temperature",
                valueOn: ["ON", 1],
                valueOff: ["OFF", 0],
                cluster: "msTemperatureMeasurement",
                attribute: {ID: 0x0225, type: 0x10},
                description: "Invert Logic Temperature Control",
                access: "STATE_SET",
            }),
            numeric({
                name: "high_temperature",
                unit: "°C",
                valueMin: -40,
                valueMax: 90,
                cluster: "msTemperatureMeasurement",
                attribute: {ID: 0x0221, type: 0x29},
                description: "Setting High Temperature Border",
                access: "STATE_SET",
            }),
            numeric({
                name: "low_temperature",
                unit: "°C",
                valueMin: -40,
                valueMax: 90,
                cluster: "msTemperatureMeasurement",
                attribute: {ID: 0x0222, type: 0x29},
                description: "Setting Low Temperature Border",
                access: "STATE_SET",
            }),
        ],
    };

module.exports = definition;