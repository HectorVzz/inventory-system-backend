import { DOMImplementation, XMLSerializer } from 'xmldom';
import { Injectable } from '@nestjs/common';
import * as JsBarcode from 'jsbarcode';

const xmlSerializer = new XMLSerializer();
const document = new DOMImplementation().createDocument(
  'http://www.w3.org/1999/xhtml',
  'html',
  null,
);
const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

JsBarcode(svgNode, 'Alan se la come', {
  xmlDocument: document,
});

const svgText = xmlSerializer.serializeToString(svgNode);
console.log(svgText);

@Injectable()
export class AppService {
  getHello(): string {
    console.log(svgText);
    return svgText;
  }
}
