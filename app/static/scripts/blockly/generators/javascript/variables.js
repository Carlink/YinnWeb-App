/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating JavaScript for variable blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.JavaScript.variables');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['variables_get'] = function(block) {
  // Variable getter.
  var code = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + ';\n';
};

Blockly.JavaScript['yinn_light_switch'] = function(block) {
  let dropdown_switch = block.getFieldValue('switch');
  // TODO: Assemble JavaScript into code variable.
  var code = 'yinnlightswitch(' + dropdown_switch + ')';
  return code;
};

Blockly.JavaScript['yinn_connect_switch'] = function(block) {
  let dropdown_switch = block.getFieldValue('switch');
  // TODO: Assemble JavaScript into code variable.
  var code = 'yinnconnectswitch(' + dropdown_switch + ')';
  return code;
};

// Yinn Sense

Blockly.JavaScript['yinn_sense_temp'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  // var code = 'temperaturaInterna';
  // TODO: Change ORDER_NONE to the correct strength.
  return ['temperaturaInterna'];
};

Blockly.JavaScript['yinn_sense_lum'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  // var code = 'temperaturaInterna';
  // TODO: Change ORDER_NONE to the correct strength.
  return ['luminosidadInterna'];
};

Blockly.JavaScript['yinn_sense_hum'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  // var code = 'temperaturaInterna';
  // TODO: Change ORDER_NONE to the correct strength.
  return ['humedadInterna'];
};

Blockly.JavaScript['yinn_sense_mov'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  // var code = 'temperaturaInterna';
  // TODO: Change ORDER_NONE to the correct strength.
  return ['movimientoInterno'];
};

// Yinn Weather

Blockly.JavaScript['yinn_weather_temp'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  // var code = 'temperaturaInterna';
  // TODO: Change ORDER_NONE to the correct strength.
  return ['temperaturaExterna'];
};

Blockly.JavaScript['yinn_weather_hum'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  // var code = 'temperaturaInterna';
  // TODO: Change ORDER_NONE to the correct strength.
  return ['humedadExterna'];
};

Blockly.JavaScript['yinn_weather_lum'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  // var code = 'temperaturaInterna';
  // TODO: Change ORDER_NONE to the correct strength.
  return ['luminosidadExterna'];
};

Blockly.JavaScript['yinn_weather_mov'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  // var code = 'temperaturaInterna';
  // TODO: Change ORDER_NONE to the correct strength.
  return ['movimientoExterna'];
};

Blockly.JavaScript['yinn_weather_lluv'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  // var code = 'temperaturaInterna';
  // TODO: Change ORDER_NONE to the correct strength.
  return ['lluviaExterna'];
};

Blockly.JavaScript['activador_tiempo'] = function(block) {
  var number_hora = block.getFieldValue('hora');
  var number_minuto = block.getFieldValue('minuto');
  var checkbox_lu = block.getFieldValue('lu') == 'TRUE';
  var checkbox_ma = block.getFieldValue('ma') == 'TRUE';
  var checkbox_mi = block.getFieldValue('mi') == 'TRUE';
  var checkbox_ju = block.getFieldValue('ju') == 'TRUE';
  var checkbox_vi = block.getFieldValue('vi') == 'TRUE';
  var checkbox_sa = block.getFieldValue('sa') == 'TRUE';
  var checkbox_do = block.getFieldValue('do') == 'TRUE';
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'crearCron(' + number_minuto + ',' + number_hora + ',' + checkbox_lu + ',' + checkbox_ma + ',' + checkbox_mi + ',' + checkbox_ju + ',' + checkbox_vi + ',' + checkbox_sa + ',' + checkbox_do + ')';
  return code;
};

