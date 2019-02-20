/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   api-responses-document.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {PolymerElement} from '@polymer/polymer/polymer-element.js';

import {AmfHelperMixin} from '@api-components/amf-helper-mixin/amf-helper-mixin.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

export {ApiResponsesDocument};

declare namespace ApiElements {

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
   *
   * ## Styling
   *
   * `<api-responses-document>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--api-responses-document` | Mixin applied to this elment | `{}`
   * `--no-info-message` | Theme mixin, applied to empty info message | `{}`
   */
  class ApiResponsesDocument extends
    ApiElements.AmfHelperMixin(
    Object) {

    /**
     * `raml-aware` scope property to use.
     */
    aware: string|null|undefined;

    /**
     * The `returns` property of the method AMF model.
     */
    returns: Array<object|null>|null;

    /**
     * Computed value of status codes from `returns` property.
     */
    readonly codes: Array<String|null>|null;

    /**
     * Selected index of a status code from the selector.
     */
    selected: number|null|undefined;

    /**
     * Currently selected response object as AMF model os a type of
     * `http://raml.org/vocabularies/http#Response`
     */
    readonly selectedResponse: object|null|undefined;

    /**
     * Computed value of method description from `method` property.
     */
    readonly description: string|null|undefined;

    /**
     * Computed value, true if `description` is set.
     */
    readonly hasDescription: boolean|null|undefined;

    /**
     * Computed value of AMF payload definition from `expects`
     * property.
     */
    readonly payload: object|null|undefined;

    /**
     * Computed value, true if `payload` has values.
     */
    readonly hasPayload: boolean|null|undefined;

    /**
     * Computed value of AMF payload definition from `expects`
     * property.
     */
    readonly headers: object|null|undefined;

    /**
     * Computed value, true if `payload` has values.
     */
    readonly hasHeaders: boolean|null|undefined;

    /**
     * Computed value from current `selectedResponse`. True if the model
     * contains custom properties (annotations in RAML).
     */
    readonly hasCustomProperties: boolean|null|undefined;

    /**
     * Computed value, true when a status is defined but does not
     * contain any documentation.
     */
    readonly noDocs: boolean|null|undefined;

    /**
     * Set to render a mobile friendly view.
     */
    narrow: boolean|null|undefined;

    /**
     * Computes list of status codes for the selector.
     *
     * @param returns Current value of `returns` property
     */
    _computeCodes(returns: Array<object|null>|null): Array<String|null>|null;

    /**
     * Computes value for `selectedResponse` property.
     * Codes are sorted so it has to match status code with entry in returns
     * array
     */
    _computeSelectedResponse(selected: Number|null, codes: Array<String|null>|null, returns: any[]|null): object|null;

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
    _computeNoDocs(hasCustomProperties: any, hasHeaders: any, hasPayload: any, hasDescription: any): any;
  }
}

declare global {

  interface HTMLElementTagNameMap {
    "api-responses-document": ApiElements.ApiResponsesDocument;
  }
}
