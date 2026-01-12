/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileOverview XML toolbox embedded into a JavaScript text string.
 */
'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};

Ardublockly.TOOLBOX_XML =
    '<xml id="toolbox" style="display:none">' +
    '  <category id="catFunctions" name="Functions" custom="PROCEDURE"></category>' +
    '  <sep></sep>' +
    '  <category id="catLogic" name="Logic">' +
    '    <block type="controls_if"></block>' +
    '    <block type="logic_compare"></block>' +
    '    <block type="logic_operation"></block>' +
    '    <block type="logic_negate"></block>' +
    '    <block type="logic_boolean"></block>' +
    '    <block type="logic_null"></block>' +
    '    <block type="logic_ternary"></block>' +
    '    <block type="controls_switch"></block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catLoops" name="Loops">' +
    '    <block type="controls_repeat_ext">' +
    '      <value name="TIMES">' +
    '        <block type="math_number">' +
    '          <field name="NUM">10</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="controls_whileUntil"></block>' +
    '    <block type="controls_time_loop">' +
    '       <value name="LOOP_SEC">' +
    '         <block type="math_number">' +
    '           <field name="NUM">10</field>' +
    '         </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="controls_for">' +
    '      <value name="FROM">' +
    '        <block type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="TO">' +
    '        <block type="math_number">' +
    '          <field name="NUM">10</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="BY">' +
    '        <block type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="controls_flow_statements"></block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catMath" name="Math">' +
    '    <block type="math_number"></block>' +
    '    <block type="math_arithmetic"></block>' +
    '    <block type="math_single"></block>' +
    '    <block type="math_trig"></block>' +
    '    <block type="math_constant"></block>' +
    '    <block type="math_number_property"></block>' +
    '    <block type="math_base_map"></block>' +
    '    <block type="math_any_map"></block>' +
    /*'    <block type="math_change">' +
    '      <value name="DELTA">' +
    '        <block type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' + */
    '    <block type="math_round"></block>' +
    '    <block type="math_modulo"></block>' +
    '    <block type="math_constrain">' +
    '      <value name="LOW">' +
    '        <block type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="HIGH">' +
    '        <block type="math_number">' +
    '          <field name="NUM">100</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="math_random_int">' +
    '      <value name="FROM">' +
    '        <block type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="TO">' +
    '        <block type="math_number">' +
    '          <field name="NUM">100</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="math_random_float"></block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catVariables" name="Variables">' +
    '      <block type="variables_get"></block>' +
    '      <block type="variables_set">' +
    '        <value name="VALUE">' +
    '          <block type="math_number"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="variables_set">' +
    '        <value name="VALUE">' +
    '          <block type="io_highlow"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="variables_set">' +
    '        <value name="VALUE">' +
    '          <block type="io_allpins"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="variables_set">' +
    '        <value name="VALUE">' +
    '          <block type="io_pwmpins"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="variables_set">' +
    '        <value name="VALUE">' +
    '          <block type="io_analogpins"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="variables_set">' +
    '        <value name="VALUE">' +
    '          <block type="variables_set_type"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="variables_init">' +
    '        <value name="VALUE"></value>' +
    '      </block>' +
    '      <block type="variables_declare"></block>' +
    '      <block type="variables_set_type"></block>' +
    '      <block type="io_highlow"></block>' +
    '      <block type="io_allpins"></block>' +
    '      <block type="io_pwmpins"></block>' +
    '      <block type="io_analogpins"></block>' +
    '      <block type="io_i2cPins"></block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catText" name="Text">' +
    '    <block type="char"></block>' +
    '    <block type="text"></block>' +
    '    <block type="string_hex"></block>' +
    '    <block type="text_join"></block>' +
    '    <block type="text_append"></block>' +
    '    <block type="text_length"></block>' +
    '    <block type="text_isEmpty"></block>' +
    '    <block type="text_getSubstring"></block>' +
    '    <block type="text_toint"></block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catTime" name="Time">' +
    '    <block type="time_delay">' +
    '      <value name="DELAY_TIME_MILI">' +
    '        <block type="math_number">' +
    '          <field name="NUM">1000</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="time_delaymicros">' +
    '      <value name="DELAY_TIME_MICRO">' +
    '        <block type="math_number">' +
    '          <field name="NUM">100</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="time_millis"></block>' +
    '    <block type="time_micros"></block>' +
    '    <block type="infinite_loop"></block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catArray" name="Array">' +
    '    <block type="array_declare"></block>' +
    '    <block type="array_modify"></block>' +
    '    <block type="array_create_with"></block>' +
    '    <block type="array_getIndex">' +
    '        <value name="AT">' +
    '            <block type="math_number">' +
    '                <field name="NUM">1</field>' +
    '            </block>' +
    '        </value>' +
    '    </block>' +
    '    <block type="array_map"></block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catInput" name="Input">' +
    '    <block type="io_input"></block>' +
    '    <block type="io_input_var">' +
    '      <value name="PIN">' +
    '        <block type="variables_get"></block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="io_input_pullup"></block>' +
    '    <block type="io_input_pullup_var">' +
    '      <value name="PIN">' +
    '        <block type="variables_get"></block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="io_digitalread"></block>' +
    '    <block type="io_digitalread_var">' +
    '      <value name="PIN">' +
    '        <block type="variables_get"></block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="io_analogread"></block>' +
    '    <block type="io_analogread_var">' +
    '      <value name="PIN">' +
    '        <block type="variables_get"></block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="io_pulsein">' +
    '      <value name="PULSETYPE">' +
    '        <block type="io_highlow"></block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="io_pulsetimeout">' +
    '      <value name="PULSETYPE">' +
    '        <block type="io_highlow"></block>' +
    '      </value>' +
    '      <value name="TIMEOUT">' +
    '        <block type="math_number">' +
    '          <field name="NUM">100</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="io_pulsetimeout_var">' +
    '      <value name="PIN">' +
    '        <block type="variables_get"></block>' +
    '      </value>' +
    '      <value name="PULSETYPE">' +
    '        <block type="io_highlow"></block>' +
    '      </value>' +
    '      <value name="TIMEOUT">' +
    '        <block type="math_number">' +
    '          <field name="NUM">1000</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catOutput" name="Output">' +
    '    <block type="io_output"></block>' +
    '    <block type="io_output_var">' +
    '      <value name="PIN">' +
    '        <block type="variables_get"></block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="io_digitalwrite">' +
    '      <value name="STATE">' +
    '        <block type="io_highlow"></block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="io_digitalwrite_var">' +
    '      <value name="PIN">' +
    '        <block type="variables_get"></block>' +
    '      </value>' +
    '      <value name="STATE">' +
    '        <block type="io_highlow"></block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="io_analogwrite">' +
    '      <value name="NUM">' +
    '        <block type="math_number">' +
    '          <field name="NUM">100</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="io_analogwrite_var">' +
    '      <value name="PIN">' +
    '        <block type="variables_get"></block>' +
    '      </value>' +
    '      <value name="NUM">' +
    '        <block type="math_number">' +
    '          <field name="NUM">100</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="io_tone">' +
    '      <field name="TONEPIN">2</field>' +
    '      <field name="NOTE">C</field>' +
    '      <field name="TONE">5</field>' +
    '      <field name="TEMPO">1</field>' +
    '      <value name="TIME">' +
    '        <block type="math_number">' +
    '          <field name="NUM">250</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="io_tone_var">' +
    '      <field name="NOTE">C</field>' +
    '      <field name="TONE">5</field>' +
    '      <field name="TEMPO">1</field>' +
    '      <value name="TIME">' +
    '        <block type="math_number">' +
    '          <field name="NUM">250</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="io_notone">' +
    '      <field name="TONEPIN">2</field>' +
    '    </block>' +
    '    <block type="io_notone_var"></block>' +
    '    <block type="io_play_tone"></block>' +
    '    <block type="io_single_tone">' +
    '      <field name="NOTE">C</field>' +
    '      <field name="TONE">5</field>' +
    '      <field name="TEMPO">1</field>' +
    '    </block>' +
    '    <block type="io_multi_tone">' +
    '      <value name="NOTE_TONE">' +
    '        <block type="text">' +
    '           <field name="TEXT">C6,D6,E6,F6,G6,A6,B6</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="TEMPO">' +
    '        <block type="text">' +
    '           <field name="TEXT">1,1,1,1,1,1,1</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catMotors" name="Motors">' +
    '    <category name="afmotor">' +
    '      <block type="afmotor">' +
    '        <field name="afmotor_channel">1</field>' +
    '        <field name="afmotor_control">FORWARD</field>' +
    '        <field name="afmotor_speed">255</field>' +
    '      </block>' +
    '      <block type="afmotor_var">' +
    '        <field name="afmotor_channel">1</field>' +
    '        <field name="afmotor_control">FORWARD</field>' +
    '        <value name="afmotor_speed">' +
    '            <block type="math_number">' +
    '              <field name="NUM">255</field>' +
    '            </block>' +
    '        </value>' +
    '      </block>' +
    '    </category>' +
    '    <category name="motordriverboard">' +
    '      <block type="md_setup"></block>' +
    '      <block type="md_initdcmotor"></block>' +
    '      <block type="md_dcmotor">' +
    '        <value name="Speed">' +
    '          <shadow type="math_number">' +
    '            <field name="NUM">0</field>' +
    '          </shadow>' +
    '        </value>' +
    '      </block>' +
    '      <block type="md_stopDCmotor"></block>' +
    '      <block type="md_initservo"></block>' +
    '      <block type="md_servo">' +
    '        <value name="angle">' +
    '          <shadow type="math_number">' +
    '            <field name="NUM">90</field>' +
    '          </shadow>' +
    '        </value>' +
    '      </block>' +
    '      <block type="md_PS2init"></block>' +
    '      <block type="md_ps2getvalue"></block>' +
    '      <block type="md_WhichPS2KeyPressed"></block>' +
    '      <block type="md_ps2keypress"></block>' +
    '      <block type="md_ps2keyunpress"></block>' +
    '      <block type="md_ps2getvibrate"></block>' +
    '      <block type="md_gpio"></block>' +
    '      <block type="md_setFreq">' +
    '        <value name="freq">' +
    '          <shadow type="math_number">' +
    '            <field name="NUM">1000</field>' +
    '          </shadow>' +
    '        </value>' +
    '      </block>' +
    '      <block type="md_pwm">' +
    '        <value name="pwm">' +
    '          <shadow type="math_number">' +
    '            <field name="NUM">1024</field>' +
    '          </shadow>' +
    '        </value>' +
    '      </block>' +
    '      <block type="md_initENmotor"></block>' +
    '      <block type="md_enmotor">' +
    '        <value name="Speed">' +
    '          <shadow type="math_number">' +
    '            <field name="NUM">0</field>' +
    '          </shadow>' +
    '        </value>' +
    '      </block>' +
    '      <block type="md_stopENmotor"></block>' +
    '      <block type="md_initstmotor">' +
    '        <value name="Steps">' +
    '          <shadow type="math_number">' +
    '            <field name="NUM">100</field>' +
    '          </shadow>' +
    '        </value>' +
    '        <value name="freq">' +
    '          <shadow type="math_number">' +
    '            <field name="NUM">200</field>' +
    '          </shadow>' +
    '        </value>' +
    '      </block>' +
    '      <block type="md_stmotor">' +
    '        <value name="Steps">' +
    '          <shadow type="math_number">' +
    '            <field name="NUM">100</field>' +
    '          </shadow>' +
    '        </value>' +
    '      </block>' +
    '      <block type="md_stopstmotor"></block>' +
    '    </category>' +
    '    <category name="servo">' +
    '      <block type="servo_attach">' +
    '        <field name="SERVO_NAME">servo_9</field>' +
    '        <field name="SERVO_PIN">9</field>' +
    '      </block>' +
    '      <block type="servo_read">' +
    '        <field name="SERVO_NAME">servo_9</field>' +
    '      </block>' +
    '      <block type="servo_write">' +
    '        <field name="SERVO_NAME">servo_9</field>' +
    '        <value name="SERVO_ANGLE">' +
    '          <block type="math_number">' +
    '            <field name="NUM">90</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="servo_pwm">' +
    '        <field name="SERVO_NAME">servo_9</field>' +
    '        <value name="SERVO_PWM">' +
    '          <block type="math_number">' +
    '            <field name="NUM">1500</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="servo_detach">' +
    '        <field name="SERVO_NAME">servo_9</field>' +
    '      </block>' +
    '      <block type="pwm_servo_attach">' +
    '        <field name="SERVO_NAME">pwmservo_9</field>' +
    '        <field name="SERVO_PIN">9</field>' +
    '      </block>' +
    '      <block type="pwm_servo_read">' +
    '        <field name="SERVO_NAME">pwmservo_9</field>' +
    '      </block>' +
    '      <block type="pwm_servo_write">' +
    '        <field name="SERVO_NAME">pwmservo_9</field>' +
    '        <value name="SERVO_ANGLE">' +
    '          <block type="math_number">' +
    '            <field name="NUM">90</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="pwm_servo_detach">' +
    '        <field name="SERVO_NAME">pwmservo_9</field>' +
    '      </block>' +
    '    </category>' +
    '    <category name="steppermotor">' +
    '      <block type="stepper_setup_4pin">' +
    '        <value name="PIN1">' +
    '          <block type="io_allpins">' +
    '            <field name="PIN">3</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="PIN2">' +
    '          <block type="io_allpins">' +
    '            <field name="PIN">4</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="PIN3">' +
    '          <block type="io_allpins">' +
    '            <field name="PIN">5</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="PIN4">' +
    '          <block type="io_allpins">' +
    '            <field name="PIN">6</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="STEPS">' +
    '          <block type="math_number">' +
    '            <field name="NUM">100</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="SPEED">' +
    '          <block type="math_number">' +
    '            <field name="NUM">10</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="stepper_speed">' +
    '        <value name="SPEED">' +
    '          <block type="math_number">' +
    '            <field name="NUM">10</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="stepper_move">' +
    '        <value name="STEP">' +
    '          <block type="math_number">' +
    '            <field name="NUM">10</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '    </category>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catComms" name="Comms">' +
    '    <category name="serial">' +
    '      <block type="serial_setup">' +
    '        <field name="SERIAL_ID">Serial</field>' +
    '        <field name="SPEED">9600</field>' +
    '      </block>' +
    '      <block type="serial_available"></block>' +
    '      <block type="serial_read_string"></block>' +
    '      <block type="serial_read_char"></block>' +
    '      <block type="serial_print">' +
    '        <value name="CONTENT">' +
    '          <block type="text"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="serial_print_hex">' +
    '        <value name="CONTENT">' +
    '          <block type="math_number"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="serial_write">' +
    '        <value name="CONTENT">' +
    '          <block type="text"></block>' +
    '        </value>' +
    '      </block>' +
    '    </category>' +
    '    <category name="bluetooth">' +
    '      <block type="bluetooth">' +
    '        <field name="RX_PIN">A4</field>' +
    '        <field name="TX_PIN">A5</field>' +
    '        <field name="BAUDRATE">9600</field>' +
    '      </block>' +
    '      <block type="bluetooth_available"></block>' +
    '      <block type="bluetooth_read_string"></block>' +
    '      <block type="bluetooth_read"></block>' +
    '      <block type="bluetooth_print">' +
    '        <value name="CONTENT">' +
    '          <block type="text"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="bluetooth_print_hex">' +
    '        <value name="CONTENT">' +
    '          <block type="math_number"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="bluetooth_write">' +
    '        <value name="CONTENT">' +
    '          <block type="text"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="bluetooth_at_command">' +
    '        <field name="HC_TYPE">HC-06</field>' +
    '        <field name="CMD">Version</field>' +
    '        <field name="VALUE"></field>' +
    '      </block>' +
    '      <block type="bluetooth_at_cmd">' +
    '        <field name="CMD">AT+PSWD</field>' +
    '      </block>' +
    '    </category>' +
    '    <category name="softwareserial">' +
    '      <block type="softwareserial_setup">' +
    '        <field name="RX_PIN">A4</field>' +
    '        <field name="TX_PIN">A5</field>' +
    '        <field name="BAUDRATE">9600</field>' +
    '      </block>' +
    '      <block type="softwareserial_available"></block>' +
    '      <block type="softwareserial_read_string"></block>' +
    '      <block type="softwareserial_read_char"></block>' +
    '      <block type="softwareserial_print">' +
    '        <value name="CONTENT">' +
    '          <block type="text"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="softwareserial_print_hex">' +
    '        <value name="CONTENT">' +
    '          <block type="math_number"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="softwareserial_write">' +
    '        <value name="CONTENT">' +
    '          <block type="text"></block>' +
    '        </value>' +
    '      </block>' +
    '    </category>' +
    '    <category name="PS2">' +
    '      <block type="PS2_init">' +
    '        <field name="VAR">ps2x</field>' +
    '        <value name="CLOCK">' +
    '          <block type="io_allpins">' +
    '            <field name="PIN">9</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="ATTENTION">' +
    '          <block type="io_allpins">' +
    '            <field name="PIN">10</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="COMMAND">' +
    '          <block type="io_allpins">' +
    '            <field name="PIN">11</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="DATA">' +
    '          <block type="io_allpins">' +
    '            <field name="PIN">12</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="PS2_read"></block> ' +
    '      <block type="PS2_Button"></block> ' +
    '      <block type="PS2_stk"></block>' +
    '    </category>' +
    '    <category name="I2C">' +
    '      <block type="I2C_scan"></block>' +
    '      <block type="I2C_init">' +
    '        <value name="I2C_ADDR">' +
    '          <block type="math_number">' +
    '            <field name="NUM">8</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="I2C_available"></block>' +
    '      <block type="I2C_read"></block>' +
    '      <block type="I2C_requestFrom">' +
    '        <value name="I2C_ADDR">' +
    '          <block type="math_number">' +
    '            <field name="NUM">8</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="I2C_BYTE">' +
    '          <block type="math_number">' +
    '            <field name="NUM">7</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="I2C_write">' +
    '        <value name="CONTENT">' +
    '          <block type="text"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="I2C_beginTrans">' +
    '        <value name="I2C_ADDR">' +
    '          <block type="math_number">' +
    '            <field name="NUM">8</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="I2C_endTrans"></block>' +
    '    </category>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catSensors" name="Sensors">' +
    '    <category name="ultrasonic_distance">' +
    '      <block type="ultrasonic_distance">' +
    '        <field name="TRIG_PIN">2</field>' +
    '        <field name="ECHO_PIN">3</field>' +
    '        <field name="DISTANCE_UNIT">cm</field>' +
    '      </block>' +
    '    </category>' +
    '    <category name="tcrt5000">' +
    '      <block type="tcrt5000">' +
    '        <field name="ANALOG_PIN">A0</field>' +
    '      </block>' +
    '      <block type="tcrt5000_var">' +
    '        <value name="ANALOG_PIN">' +
    '          <block type="variables_get"></block>' +
    '        </value>' +
    '      </block>' +
    '    </category>' +
    '    <category name="DHT11">' +
    '      <block type="logic_nan"></block>' +
    '      <block type="DHT11_readTemp">' +
    '        <field name="DATAPIN">A3</field>' +
    '      </block>' +
    '      <block type="DHT11_readTemp_var">' +
    '        <value name="DATAPIN">' +
    '          <block type="variables_get"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="DHT11_readHumi">' +
    '        <field name="DATAPIN">A3</field>' +
    '      </block>' +
    '      <block type="DHT11_readHumi_var">' +
    '        <value name="DATAPIN">' +
    '          <block type="variables_get"></block>' +
    '        </value>' +
    '      </block>' +
    '    </category>' +
    '    <category name="DS18B20">' +
    '      <block type="DS18B20_readTemp">' +
    '        <field name="DATAPIN">3</field>' +
    '      </block>' +
    '      <block type="DS18B20_readTemp_var">' +
    '        <value name="DATAPIN">' +
    '          <block type="variables_get"></block>' +
    '        </value>' +
    '      </block>' +
    '    </category>' +
    '    <category name="photocells">' +
    '      <block type="photocells_read">' +
    '        <field name="DATAPIN">A2</field>' +
    '      </block>' +
    '      <block type="photocells_read_var">' +
    '        <value name="DATAPIN">' +
    '          <block type="variables_get"></block>' +
    '        </value>' +
    '      </block>' +
    '    </category>' +
    '    <category name="LM35">' +
    '      <block type="lm35_read">' +
    '        <field name="DATAPIN">A2</field>' +
    '      </block>' +
    '      <block type="lm35_read_var">' +
    '        <value name="DATAPIN">' +
    '          <block type="variables_get"></block>' +
    '        </value>' +
    '      </block>' +
    '    </category>' +
    '    <category name="irrecv">' +
    '      <block type="irrecv_setup">' +
    '        <field name="DATAPIN">A3</field>' +
    '      </block>' +
    '      <block type="irrecv_setup_var">' +
    '        <value name="DATAPIN">' +
    '          <block type="variables_get"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="irrecv_available">' +
    '        <field name="DATAPIN">A3</field>' +
    '      </block>' +
    '      <block type="irrecv_available_var">' +
    '        <value name="DATAPIN">' +
    '          <block type="variables_get"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="irrecv_read">' +
    '        <field name="DATAPIN">A3</field>' +
    '      </block>' +
    '      <block type="irrecv_read_var">' +
    '        <value name="DATAPIN">' +
    '          <block type="variables_get"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="irrecv_resume">' +
    '        <field name="DATAPIN">A3</field>' +
    '      </block>' +
    '      <block type="irrecv_resume_var">' +
    '        <value name="DATAPIN">' +
    '          <block type="variables_get"></block>' +
    '        </value>' +
    '      </block>' +
    '    </category>' +
    '    <category name="hx711">' +
    '      <block type="hx711_setup">' +
    '        <field name="DATA_PIN">6</field>' +
    '        <field name="CLK_PIN">5</field>' +
    '      </block>' +
    '      <block type="hx711_set_scale">' +
    '        <value name="HX711_SET_SCALE">' +
    '          <block type="math_number">' +
    '            <field name="NUM">234</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="hx711_tare"></block>' +
    '      <block type="hx711_get_units">' +
    '        <value name="HX711_GET_UNITS">' +
    '          <block type="math_number">' +
    '            <field name="NUM">10</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="hx711_power_down"></block>' +
    '      <block type="hx711_power_up"></block>' +
    '    </category>' +
    '    <category name="QMC5883L">' +
    '      <block type="I2C_QMC5883L_SETUP"></block>' +
    '      <block type="I2C_QMC5883L_READ"></block>' +
    '      <block type="I2C_QMC5883L_FUN"></block>' +
    '      <block type="I2C_QMC5883L_AZIUMTH"></block>' +
    '      <block type="I2C_QMC5883L_BEARING">' +
    '        <value name="AZIMUTH">' +
    '          <block type="I2C_QMC5883L_AZIUMTH"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="I2C_QMC5883L_DIRECTION">' +
    '        <value name="AZIMUTH">' +
    '          <block type="I2C_QMC5883L_AZIUMTH"></block>' +
    '        </value>' +
    '        <value name="ARRAY">' +
    '          <block type="variables_get"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="I2C_QMC5883L_SMOOTHING"></block>' +
    '      <block type="I2C_QMC5883L_SETUP_MODE"></block>' +
    '    </category>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catPixetto" name="Pixetto">' +
    '    <block type="pixetto_setup">' +
    '      <field name="PIXETTO_RX">A4</field>' +
    '      <field name="PIXETTO_TX">A5</field>' +
    '    </block>' +
    '    <block type="pixetto_flush"></block>' +
    '    <block type="pixetto_function"></block>' +
    '    <block type="pixetto_detected"></block>' +
    '    <block type="pixetto_now_function"></block>' +
    '    <block type="pixetto_gettypeid"></block>' +
    '    <block type="pixetto_getposx"></block>' +
    '    <block type="pixetto_getposy"></block>' +
    '    <block type="pixetto_getwidth"></block>' +
    '    <block type="pixetto_getheigth"></block>' +
    '    <block type="pixetto_numobjects"></block>' +
    '    <block type="pixetto_color_detection"></block>' +
    '    <block type="pixetto_shape_detection"></block>' +
    '    <block type="pixetto_sphere_detection"></block>' +
    '    <block type="pixetto_template_detection"></block>' +
    '    <block type="pixetto_keypoints_detection"></block>' +
    '    <block type="pixetto_neural_network_detection"></block>' +
    '    <block type="pixetto_sign_detection"></block>' +
    '    <block type="pixetto_num_detection"></block>' +
    '    <block type="pixetto_latter_detection"></block>' +
    '    <block type="pixetto_cloud_detection"></block>' +
    '    <block type="pixetto_classifier_detection"></block>' +
    '    <block type="pixetto_equation_expression">' +
    '      <field name="PIXETTO_EQUATION_EXP">temp</field>' +
    '    </block>' +
    '    <block type="pixetto_voice_detection"></block>' +
    '    <block type="pixetto_apriltag_detection"></block>' +
    '    <block type="pixetto_lanes_detection"></block>' +
    '    <block type="pixetto_equation_answer"></block>' +
    '    <block type="pixetto_color"></block>' +
    '    <block type="pixetto_shape"></block>' +
    '    <block type="pixetto_sign"></block>' +
    '    <block type="pixetto_num">0</block>' +
    '    <block type="pixetto_latter"></block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catHusky" name="HUSKYLENS">' +
    '    <block type="huskylens_serial">' +
    '      <field name="HL_RESULT_NAME">huskylens_result</field>' +
    '      <field name="HL_RX">A4</field>' +
    '      <field name="HL_TX">A5</field>' +
    '    </block>' +
    '    <block type="huskylens_i2c">' +
    '      <field name="HL_RESULT_NAME">huskylens_result</field>' +
    '    </block>' +
    '    <block type="huskylens_begin"></block>' +
    '    <block type="huskylens_request"></block>' +
    '    <block type="huskylens_requestby"></block>' +
    '    <block type="huskylens_requestbyid">' +
    '        <value name="OBJECT_ID">' +
    '          <block type="math_number">' +
    '            <field name="NUM">1</field>' +
    '          </block>' +
    '        </value>' +
    '    </block>' +
    '    <block type="huskylens_available"></block>' +
    '    <block type="huskylens_get"></block>' +
    '    <block type="huskylens_get_result"></block>' +
    '    <block type="huskylens_algorithm"></block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catLCDLED" name="LCD/LED">' +
    '    <category name="I2CLCD">' +
    '      <block type="I2CLCD_scan"></block>' +
    '      <block type="I2CLCD_setup"></block>' +
    '      <block type="I2CLCD_move">' +
    '        <value name="X">' +
    '          <block type="math_number">' +
    '            <field name="NUM">0</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="Y">' +
    '          <block type="math_number">' +
    '            <field name="NUM">0</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="I2CLCD_clear"></block>' +
    '      <block type="I2CLCD_clear_y">' +
    '        <value name="Y">' +
    '          <block type="math_number">' +
    '          <field name="NUM">0</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="I2CLCD_print">' +
    '        <value name="CONTENT">' +
    '          <block type="text">' +
    '            <field name="TEXT"></field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="I2CLCD_createChar">' +
    '        <value name="CONTENT">' +
    '          <block type="I2CLCD_img"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="I2CLCD_img"></block>' +
    '      <block type="I2CLCD_backlightOn"></block>' +
    '      <block type="I2CLCD_backlightOff"></block>' +
    '      <block type="I2CLCD_scroll"></block>' +
    '      <block type="I2CLCD_multi_tone">' +
    '        <value name="NOTE_TONE">' +
    '          <block type="text">' +
    '             <field name="TEXT">C6,D6,E6,F6,G6,A6,B6</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="TEMPO">' +
    '          <block type="text">' +
    '             <field name="TEXT">1,1,1,1,1,1,1</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '    </category>' +
    '    <category name="LEDMatrix">' +
    '      <block type="MAX7219_init">' +
    '        <value name="DIN">' +
    '          <block type="io_allpins">' +
    '            <field name="PIN">A2</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="CS">' +
    '          <block type="io_allpins">' +
    '            <field name="PIN">A1</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="CLK">' +
    '          <block type="io_allpins">' +
    '            <field name="PIN">A0</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="NUMS">' +
    '          <block type="math_number">' +
    '            <field name="NUM">1</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="display_Matrix_clearDisplay">' +
    '        <value name="NO">' +
    '          <block type="math_number">' +
    '            <field name="NUM">0</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="display_Matrix_Brightness">' +
    '        <value name="NO">' +
    '          <block type="math_number">' +
    '            <field name="NUM">0</field>' +
    '          </block>' +
    '        </value>' +
    '        <field name="Brightness">15</field>' +
    '      </block>' +
    '      <block type="display_Matrix_DrawPixel">' +
    '        <value name="NO">' +
    '          <block type="math_number">' +
    '            <field name="NUM">0</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="XVALUE">' +
    '          <block type="math_number">' +
    '            <field name="NUM">0</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="YVALUE">' +
    '          <block type="math_number">' +
    '            <field name="NUM">0</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="STAT">' +
    '          <block type="io_highlow">' +
    '            <field name="STATE">HIGH</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="display_Matrix_multi_tone">' +
    '        <value name="NO">' +
    '          <block type="math_number">' +
    '            <field name="NUM">0</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name=\'NOTE_TONE\'>' +
    '          <block type=\'text\'>' +
    '             <field name=\'TEXT\'>C6,D6,E6,F6,G6,A6,B6</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name=\'TEMPO\'>' +
    '          <block type=\'text\'>' +
    '             <field name=\'TEXT\'>1,1,1,1,1,1,1</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="Matrix_char_digital"></block>' +
    '      <block type="Matrix_char_upper"></block>' +
    '      <block type="Matrix_char_lower"></block>' +
    '      <block type="Matrix_img"></block>' +
    '      <block type="display_Matrix_predefarr">' +
    '        <value name="NO">' +
    '          <block type="math_number">' +
    '            <field name="NUM">0</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="LEDArray">' +
    '          <block type="display_Matrix_LedArray"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="Matrix_char_digital_half"></block>' +
    '      <block type="Matrix_char_lower_half"></block>' +
    '      <block type="Matrix_char_upper_half"></block>' +
    '      <block type="display_Matrix_half_predefarr">' +
    '        <value name="NO">' +
    '          <block type="math_number">' +
    '            <field name="NUM">0</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="LEDArray_left">' +
    '          <block type="display_Matrix_half_LedArray">' +
    '            <field name="ARRAY_VAR">LedArray1</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="LEDArray_right">' +
    '          <block type="display_Matrix_half_LedArray">' +
    '            <field name="ARRAY_VAR">LedArray2</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '    </category>' +
    '    <category name="WS2812Leds">' +
    '      <block type="pixel_init_var">' +
    '        <value name="PIXEL_NUM">' +
    '          <block type="math_number">' +
    '            <field name="NUM">24</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="PIXEL_PIN">' +
    '          <block type="io_allpins"></block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="pixel_single_color">' +
    '        <value name="PIXEL_NUMTH">' +
    '          <block type="math_number">' +
    '            <field name="NUM">0</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="PIXEL_RED">' +
    '          <block type="math_number">' +
    '            <field name="NUM">255</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="PIXEL_GREEN">' +
    '          <block type="math_number">' +
    '            <field name="NUM">255</field>' +
    '          </block>' +
    '        </value>' +
    '        <value name="PIXEL_BLUE">' +
    '          <block type="math_number">' +
    '            <field name="NUM">255</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="pixel_single_off">' +
    '        <value name="PIXEL_NUMTH">' +
    '          <block type="math_number">' +
    '            <field name="NUM">0</field>' +
    '          </block>' +
    '        </value>' +
    '      </block>' +
    '      <block type="pixel_all_off"></block>' +
    '    </category>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catRTC" name="RTC時鐘">' +
    '    <block type="DS1302_init">' +
    '      <value name="RST">' +
    '        <block type="io_allpins">' +
    '          <field name="PIN">7</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="DAT">' +
    '        <block type="io_allpins">' +
    '          <field name="PIN">8</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="CLK">' +
    '        <block type="io_allpins">' +
    '          <field name="PIN">9</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="DS1307_init">' +
    '      <value name="SDA">' +
    '        <block type="io_allpins">' +
    '          <field name="PIN">A4</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="SCL">' +
    '        <block type="io_allpins">' +
    '          <field name="PIN">A5</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="RTC_set_datetime">' +
    '      <value name="date">' +
    '        <block type="text" >' +
    '          <field name="TEXT">Jan/01/2020</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="time">' +
    '        <block type="text" >' +
    '          <field name="TEXT">12:34:56</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="RTC_get_rtc"></block>' +
    '    <block type="RTC_set_time">' +
    '      <value name="hour">' +
    '        <block type="math_number">' +
    '          <field name="NUM">8</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="minute">' +
    '        <block type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="second">' +
    '        <block type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="RTC_set_date" >' +
    '      <value name="year">' +
    '        <block type="math_number">' +
    '          <field name="NUM">2020</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="month">' +
    '        <block type="math_number">' +
    '          <field name="NUM">1</field>' +
    '        </block>' +
    '      </value>' +
    '      <value name="day">' +
    '        <block type="math_number" >' +
    '          <field name="NUM">1</field>' +
    '        </block>' +
    '      </value>' +
    '    </block>' +
    '    <block type="get_system_date_time">' +
    '      <field name="type">DATE</field>' +
    '    </block>' +
    '  </category>' +
    '  <sep></sep>' +
    '  <category id="catSD" name="SD卡">' +
    '    <block type="SD_initial">' +
    '      <field name="CS_PIN">10</field>' +
    '    </block>' +
    '    <block type="SD_success"></block>' +
    '    <block type="SD_exists"></block>' +
    '    <block type="SD_read_type"></block>' +
    '    <block type="SD_type"></block>' +
    '    <block type="SD_dir_create">' +
    '        <value name="DIR_NAME">' +
    '          <block type="text"></block>' +
    '        </value>' +
    '    </block>' +
    '    <block type="SD_dir_delete">' +
    '        <value name="DIR_NAME">' +
    '          <block type="text"></block>' +
    '        </value>' +
    '    </block>' +
    '    <block type="SD_remove">' +
    '        <value name="FILE_NAME">' +
    '          <block type="text"></block>' +
    '        </value>' +
    '    </block>' +
    '    <block type="SD_dir_file_exist">' +
    '        <value name="DIR_FILE_NAME">' +
    '          <block type="text"></block>' +
    '        </value>' +
    '    </block>' +
    '    <block type="SD_file_var"></block>' +
    '    <block type="SD_file_open">' +
    '        <value name="DIR_FILE_NAME">' +
    '          <block type="text"></block>' +
    '        </value>' +
    '    </block>' +
    '    <block type="SD_file_opened"></block>' +
    '    <block type="SD_file_write">' +
    '        <value name="INPUT">' +
    '          <block type="text"></block>' +
    '        </value>' +
    '    </block>' +
    '    <block type="SD_file_read"></block>' +
    '    <block type="SD_file_available"></block>' +
    '    <block type="SD_file_close"></block>' +
    '  </category>' +
    '</xml>';
