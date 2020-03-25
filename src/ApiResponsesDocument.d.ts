/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   src/ApiResponsesDocument.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {LitElement, html} from 'lit-element';

import {AmfHelperMixin} from '@api-components/amf-helper-mixin/amf-helper-mixin.js';

export {ApiResponsesDocument};

/**
 * `api-responses-document`
 *
 * A documentation for method responses based on AMF model.
 *
 * It renders a selector of available status codes in the responses array.
 * This is computed from `returns` property which must be an array
 * as a value of AMF's `http://www.w3.org/ns/hydra/core#returns` property
 * of the `method` shape.
 *
 * Status codes are sorted before rendering.
 *
 * In the documentation part it renders annotations (AMF custom proeprties)
 * added to the response, headers and body.
 */
declare class ApiResponsesDocument extends
  ApiElements.AmfHelperMixin(
  Object) {
  readonly styles: any;
  legacy: boolean|null|undefined;

  /**
   * The `returns` property of the method AMF model.
   */
  returns: Array<object|null>|null;

  /**
   * Selected index of a status code from the selector.
   */
  selected: number|null|undefined;

  /**
   * List of recognized codes.
   */
  readonly codes: Array<String|null>|null;

  /**
   * Computed value of status codes from `returns` property.
   */
  _codes: Array<String|null>|null;

  /**
   * Currently selected response object as AMF model os a type of
   * `http://raml.org/vocabularies/http#Response`
   */
  _selectedResponse: object|null|undefined;
  readonly hasPayload: any;
  readonly hasHeaders: any;
  readonly hasDescription: any;
  readonly noDocumentation: any;

  /**
   * `raml-aware` scope property to use.
   */
  aware: string|null|undefined;

  /**
   * Computed value of method description from `method` property.
   */
  _description: string|null|undefined;

  /**
   * Computed value of AMF payload definition from `expects`
   * property.
   */
  _payload: object|null|undefined;

  /**
   * Computed value of AMF payload definition from `expects`
   * property.
   */
  _headers: object|null|undefined;

  /**
   * Computed value from current `_selectedResponse`. True if the model
   * contains custom properties (annotations in RAML).
   */
  _hasCustomProperties: boolean|null|undefined;

  /**
   * Set to render a mobile friendly view.
   */
  narrow: boolean|null|undefined;

  /**
   * Enables compatibility with Anypoint components.
   */
  compatibility: boolean|null|undefined;

  /**
   * When enabled it renders external types as links and dispatches
   * `api-navigation-selection-changed` when clicked.
   */
  graph: boolean|null|undefined;

  /**
   * A computed list of OAS' Links in currently selected response.
   */
  links: Array<object|null>|null|undefined;

  /**
   * Computes list of status codes for the selector.
   */
  _computeCodes(): Array<String|null>|null;

  /**
   * Computes value for `_selectedResponse` property.
   * Codes are sorted so it has to match status code with entry in returns
   * array
   */
  _computeSelectedResponse(): object|null;

  /**
   * Checks if given `item` matches `statusCode`
   *
   * @param item Response AMF model
   * @param status Status code as string
   */
  _statusMatches(item: object|null, status: String|null): Boolean|null;

  /**
   * Sets `selected` 0 when codes changes.
   * It only sets selection if there's actually a value to render.
   * It prohibits from performing additional computations for nothing.
   */
  _codesChanged(codes: any[]|null): void;
  _apiChangedHandler(e: any): void;
  _tabsHandler(e: any): void;
  _computeLinks(response: any): any;
  render(): any;
  _codesSelectorTemplate(): any;
  _awareTemplate(): any;
  _annotationsTemplate(): any;
  _descriptionTemplate(): any;
  _headersTemplate(): any;
  _payloadTemplate(): any;
  _linksTemplate(): any;
}
