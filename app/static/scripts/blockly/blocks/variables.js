/**
 * @license
 * Visual Blocks Editor
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
 * @fileoverview Variable blocks for Blockly.

 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.variables');  // Deprecated.
goog.provide('Blockly.Constants.Variables');

goog.require('Blockly.Blocks');
goog.require('Blockly');


/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg.VARIABLES_HUE. (2018 April 5)
 */
Blockly.Constants.Variables.HUE = 330;

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // Block for variable getter.
  {
    "type": "variables_get",
    "message0": "%1",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_VARIABLES_DEFAULT_NAME}"
      }
    ],
    "output": null,
    "colour": "%{BKY_VARIABLES_HUE}",
    "helpUrl": "%{BKY_VARIABLES_GET_HELPURL}",
    "tooltip": "%{BKY_VARIABLES_GET_TOOLTIP}",
    "extensions": ["contextMenu_variableSetterGetter"]
  },
  // Block for variable setter.
  {
    "type": "variables_set",
    "message0": "%{BKY_VARIABLES_SET}",
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_VARIABLES_DEFAULT_NAME}"
      },
      {
        "type": "input_value",
        "name": "VALUE"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_VARIABLES_HUE}",
    "tooltip": "%{BKY_VARIABLES_SET_TOOLTIP}",
    "helpUrl": "%{BKY_VARIABLES_SET_HELPURL}",
    "extensions": ["contextMenu_variableSetterGetter"]
  }, 
  {
    "type": "yinn_light_switch",
    "message0": "Lámpara  %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "switch",
        "options": [
          [
            "encendido",
            "true"
          ],
          [
            "apagado",
            "false"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "yinn_connect_switch",
    "message0": "Switch  %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "switch",
        "options": [
          [
            "encendido",
            "true"
          ],
          [
            "apagado",
            "false"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "yinn_sense_temp",
    "message0": "Temperatura Interior",
    "output": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "yinn_sense_lum",
    "message0": "Luminosidad Interior",
    "output": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "yinn_sense_hum",
    "message0": "Humedad Interior",
    "output": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "yinn_sense_mov",
    "message0": "Movimiento Interior",
    "output": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "yinn_weather_temp",
    "message0": "Temperatura Exterior",
    "output": null,
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "yinn_weather_hum",
    "message0": "Humedad Exterior",
    "output": null,
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "yinn_weather_lum",
    "message0": "Iluminación Exterior",
    "output": null,
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "yinn_weather_mov",
    "message0": "Movimiento Exterior",
    "output": null,
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "yinn_weather_lluv",
    "message0": "Lluvia",
    "output": null,
    "colour": 300,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "activador_tiempo",
    "message0": "Activar a las %1 : %2 hrs %3 Lu %4 Ma %5 Mi %6 Ju %7 Vi %8 Sa %9 Do %10 %11 %12",
    "args0": [
      {
        "type": "field_number",
        "name": "hora",
        "value": 0,
        "min": 0,
        "max": 24
      },
      {
        "type": "field_number",
        "name": "minuto",
        "value": 0,
        "min": 0,
        "max": 60
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "field_checkbox",
        "name": "lu",
        "checked": true
      },
      {
        "type": "field_checkbox",
        "name": "ma",
        "checked": true
      },
      {
        "type": "field_checkbox",
        "name": "mi",
        "checked": true
      },
      {
        "type": "field_checkbox",
        "name": "ju",
        "checked": true
      },
      {
        "type": "field_checkbox",
        "name": "vi",
        "checked": true
      },
      {
        "type": "field_checkbox",
        "name": "sa",
        "checked": true
      },
      {
        "type": "field_checkbox",
        "name": "do",
        "checked": true
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "NAME"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "timer_durante",
    "message0": "Hacer dentro de %1 %2 %3 %4",
    "args0": [
      {
        "type": "field_number",
        "name": "tiempo",
        "value": 0,
        "min": 0,
        "max": 1000
      },
      {
        "type": "field_dropdown",
        "name": "medida",
        "options": [
          [
            "minutos",
            "1"
          ],
          [
            "horas",
            "2"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "codigo"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }

]);  // END JSON EXTRACT (Do not delete this comment.)

/**
 * Mixin to add context menu items to create getter/setter blocks for this
 * setter/getter.
 * Used by blocks 'variables_set' and 'variables_get'.
 * @mixin
 * @augments Blockly.Block
 * @package
 * @readonly
 */
Blockly.Constants.Variables.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN = {
  /**
   * Add menu option to create getter/setter block for this setter/getter.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    if (this.isInFlyout){
      return;
    }
    // Getter blocks have the option to create a setter block, and vice versa.
    if (this.type == 'variables_get') {
      var opposite_type = 'variables_set';
      var contextMenuMsg = Blockly.Msg.VARIABLES_GET_CREATE_SET;
    } else {
      var opposite_type = 'variables_get';
      var contextMenuMsg = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    }

    var option = {enabled: this.workspace.remainingCapacity() > 0};
    var name = this.getField('VAR').getText();
    option.text = contextMenuMsg.replace('%1', name);
    var xmlField = goog.dom.createDom('field', null, name);
    xmlField.setAttribute('name', 'VAR');
    var xmlBlock = goog.dom.createDom('block', null, xmlField);
    xmlBlock.setAttribute('type', opposite_type);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
  }
};

Blockly.Extensions.registerMixin('contextMenu_variableSetterGetter',
    Blockly.Constants.Variables.CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN);
