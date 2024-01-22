"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WINDOW = void 0;
// This file contains compile-time defined variables.
const WINDOW = "(_=>{var _;(()=>{var e={167:(e,t)=>{\"use strict\";function n(e,t){return void 0===t&&(t=Object),t&&\"function\"==typeof t.freeze?t.freeze(e):e}var r=n({HTML:\"text/html\",isHTML:function(e){return e===r.HTML},XML_APPLICATION:\"application/xml\",XML_TEXT:\"text/xml\",XML_XHTML_APPLICATION:\"application/xhtml+xml\",XML_SVG_IMAGE:\"image/svg+xml\"}),i=n({HTML:\"http://www.w3.org/1999/xhtml\",isHTML:function(e){return e===i.HTML},SVG:\"http://www.w3.org/2000/svg\",XML:\"http://www.w3.org/XML/1998/namespace\",XMLNS:\"http://www.w3.org/2000/xmlns/\"});t.assign=function(e,t){if(null===e||\"object\"!=typeof e)throw new TypeError(\"target is not an object\");for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},t.find=function(e,t,n){if(void 0===n&&(n=Array.prototype),e&&\"function\"==typeof n.find)return n.find.call(e,t);for(var r=0;r<e.length;r++)if(Object.prototype.hasOwnProperty.call(e,r)){var i=e[r];if(t.call(void 0,i,r,e))return i}},t.freeze=n,t.MIME_TYPE=r,t.NAMESPACE=i},129:(e,t,n)=>{var r=n(167),i=n(146),o=n(45),a=n(925),u=i.DOMImplementation,s=r.NAMESPACE,c=a.ParseError,l=a.XMLReader;function p(e){return e.replace(/\\r[\\n\\u0085]/g,\"\\n\").replace(/[\\r\\u0085\\u2028]/g,\"\\n\")}function f(e){this.options=e||{locator:{}}}function d(){this.cdata=!1}function h(e,t){t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber}function m(e){if(e)return\"\\n@\"+(e.systemId||\"\")+\"#[line:\"+e.lineNumber+\",col:\"+e.columnNumber+\"]\"}function N(e,t,n){return\"string\"==typeof e?e.substr(t,n):e.length>=t+n||t?new java.lang.String(e,t,n)+\"\":e}function g(e,t){e.currentElement?e.currentElement.appendChild(t):e.doc.appendChild(t)}f.prototype.parseFromString=function(e,t){var n=this.options,r=new l,i=n.domBuilder||new d,a=n.errorHandler,u=n.locator,c=n.xmlns||{},f=/\\/x?html?$/.test(t),h=f?o.HTML_ENTITIES:o.XML_ENTITIES;u&&i.setDocumentLocator(u),r.errorHandler=function(e,t,n){if(!e){if(t instanceof d)return t;e=t}var r={},i=e instanceof Function;function o(t){var o=e[t];!o&&i&&(o=2==e.length?function(n){e(t,n)}:e),r[t]=o&&function(e){o(\"[xmldom \"+t+\"]\\t\"+e+m(n))}||function(){}}return n=n||{},o(\"warning\"),o(\"error\"),o(\"fatalError\"),r}(a,i,u),r.domBuilder=n.domBuilder||i,f&&(c[\"\"]=s.HTML),c.xml=c.xml||s.XML;var N=n.normalizeLineEndings||p;return e&&\"string\"==typeof e?r.parse(N(e),c,h):r.errorHandler.error(\"invalid doc source\"),i.doc},d.prototype={startDocument:function(){this.doc=(new u).createDocument(null,null,null),this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(e,t,n,r){var i=this.doc,o=i.createElementNS(e,n||t),a=r.length;g(this,o),this.currentElement=o,this.locator&&h(this.locator,o);for(var u=0;u<a;u++){e=r.getURI(u);var s=r.getValue(u),c=(n=r.getQName(u),i.createAttributeNS(e,n));this.locator&&h(r.getLocator(u),c),c.value=c.nodeValue=s,o.setAttributeNode(c)}},endElement:function(e,t,n){var r=this.currentElement;r.tagName,this.currentElement=r.parentNode},startPrefixMapping:function(e,t){},endPrefixMapping:function(e){},processingInstruction:function(e,t){var n=this.doc.createProcessingInstruction(e,t);this.locator&&h(this.locator,n),g(this,n)},ignorableWhitespace:function(e,t,n){},characters:function(e,t,n){if(e=N.apply(this,arguments)){if(this.cdata)var r=this.doc.createCDATASection(e);else r=this.doc.createTextNode(e);this.currentElement?this.currentElement.appendChild(r):/^\\s*$/.test(e)&&this.doc.appendChild(r),this.locator&&h(this.locator,r)}},skippedEntity:function(e){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(e){(this.locator=e)&&(e.lineNumber=0)},comment:function(e,t,n){e=N.apply(this,arguments);var r=this.doc.createComment(e);this.locator&&h(this.locator,r),g(this,r)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(e,t,n){var r=this.doc.implementation;if(r&&r.createDocumentType){var i=r.createDocumentType(e,t,n);this.locator&&h(this.locator,i),g(this,i),this.doc.doctype=i}},warning:function(e){console.warn(\"[xmldom warning]\\t\"+e,m(this.locator))},error:function(e){console.error(\"[xmldom error]\\t\"+e,m(this.locator))},fatalError:function(e){throw new c(e,this.locator)}},\"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl\".replace(/\\w+/g,(function(e){d.prototype[e]=function(){return null}})),t.DOMParser=f},146:(e,t,n)=>{var r=n(167),i=r.find,o=r.NAMESPACE;function a(e){return\"\"!==e}function u(e,t){return e.hasOwnProperty(t)||(e[t]=!0),e}function s(e){if(!e)return[];var t=function(e){return e?e.split(/[\\t\\n\\f\\r ]+/).filter(a):[]}(e);return Object.keys(t.reduce(u,{}))}function c(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}function l(e,t){var n=e.prototype;if(!(n instanceof t)){function r(){}r.prototype=t.prototype,c(n,r=new r),e.prototype=n=r}n.constructor!=e&&(\"function\"!=typeof e&&console.error(\"unknown Class:\"+e),n.constructor=e)}var p={},f=p.ELEMENT_NODE=1,d=p.ATTRIBUTE_NODE=2,h=p.TEXT_NODE=3,m=p.CDATA_SECTION_NODE=4,N=p.ENTITY_REFERENCE_NODE=5,g=p.ENTITY_NODE=6,v=p.PROCESSING_INSTRUCTION_NODE=7,E=p.COMMENT_NODE=8,w=p.DOCUMENT_NODE=9,b=p.DOCUMENT_TYPE_NODE=10,y=p.DOCUMENT_FRAGMENT_NODE=11,T=p.NOTATION_NODE=12,D={},x={},O=(D.INDEX_SIZE_ERR=(x[1]=\"Index size error\",1),D.DOMSTRING_SIZE_ERR=(x[2]=\"DOMString size error\",2),D.HIERARCHY_REQUEST_ERR=(x[3]=\"Hierarchy request error\",3)),S=(D.WRONG_DOCUMENT_ERR=(x[4]=\"Wrong document\",4),D.INVALID_CHARACTER_ERR=(x[5]=\"Invalid character\",5),D.NO_DATA_ALLOWED_ERR=(x[6]=\"No data allowed\",6),D.NO_MODIFICATION_ALLOWED_ERR=(x[7]=\"No modification allowed\",7),D.NOT_FOUND_ERR=(x[8]=\"Not found\",8)),I=(D.NOT_SUPPORTED_ERR=(x[9]=\"Not supported\",9),D.INUSE_ATTRIBUTE_ERR=(x[10]=\"Attribute in use\",10));function C(e,t){if(t instanceof Error)var n=t;else n=this,Error.call(this,x[e]),this.message=x[e],Error.captureStackTrace&&Error.captureStackTrace(this,C);return n.code=e,t&&(this.message=this.message+\": \"+t),n}function A(){}function _(e,t){this._node=e,this._refresh=t,M(this)}function M(e){var t=e._node._inc||e._node.ownerDocument._inc;if(e._inc!=t){var n=e._refresh(e._node);ve(e,\"length\",n.length),c(n,e),e._inc=t}}function R(){}function L(e,t){for(var n=e.length;n--;)if(e[n]===t)return n}function P(e,t,n,r){if(r?t[L(t,r)]=n:t[t.length++]=n,e){n.ownerElement=e;var i=e.ownerDocument;i&&(r&&q(i,e,r),function(e,t,n){e&&e._inc++,n.namespaceURI===o.XMLNS&&(t._nsMap[n.prefix?n.localName:\"\"]=n.value)}(i,e,n))}}function U(e,t,n){var r=L(t,n);if(!(r>=0))throw new C(S,new Error(e.tagName+\"@\"+n));for(var i=t.length-1;r<i;)t[r]=t[++r];if(t.length=i,e){var o=e.ownerDocument;o&&(q(o,e,n),n.ownerElement=null)}}function F(){}function k(){}function X(e){return(\"<\"==e?\"&lt;\":\">\"==e&&\"&gt;\")||\"&\"==e&&\"&amp;\"||'\"'==e&&\"&quot;\"||\"&#\"+e.charCodeAt()+\";\"}function H(e,t){if(t(e))return!0;if(e=e.firstChild)do{if(H(e,t))return!0}while(e=e.nextSibling)}function j(){this.ownerDocument=this}function q(e,t,n,r){e&&e._inc++,n.namespaceURI===o.XMLNS&&delete t._nsMap[n.prefix?n.localName:\"\"]}function B(e,t,n){if(e&&e._inc){e._inc++;var r=t.childNodes;if(n)r[r.length++]=n;else{for(var i=t.firstChild,o=0;i;)r[o++]=i,i=i.nextSibling;r.length=o,delete r[r.length]}}}function z(e,t){var n=t.previousSibling,r=t.nextSibling;return n?n.nextSibling=r:e.firstChild=r,r?r.previousSibling=n:e.lastChild=n,t.parentNode=null,t.previousSibling=null,t.nextSibling=null,B(e.ownerDocument,e),t}function V(e){return e&&e.nodeType===k.DOCUMENT_TYPE_NODE}function $(e){return e&&e.nodeType===k.ELEMENT_NODE}function G(e){return e&&e.nodeType===k.TEXT_NODE}function Y(e,t){var n=e.childNodes||[];if(i(n,$)||V(t))return!1;var r=i(n,V);return!(t&&r&&n.indexOf(r)>n.indexOf(t))}function W(e,t){var n=e.childNodes||[];if(i(n,(function(e){return $(e)&&e!==t})))return!1;var r=i(n,V);return!(t&&r&&n.indexOf(r)>n.indexOf(t))}function Z(e,t,n){var r=e.childNodes||[],o=t.childNodes||[];if(t.nodeType===k.DOCUMENT_FRAGMENT_NODE){var a=o.filter($);if(a.length>1||i(o,G))throw new C(O,\"More than one element or text in fragment\");if(1===a.length&&!Y(e,n))throw new C(O,\"Element in fragment can not be inserted before doctype\")}if($(t)&&!Y(e,n))throw new C(O,\"Only one element can be added and only after doctype\");if(V(t)){if(i(r,V))throw new C(O,\"Only one doctype is allowed\");var u=i(r,$);if(n&&r.indexOf(u)<r.indexOf(n))throw new C(O,\"Doctype can only be inserted before an element\");if(!n&&u)throw new C(O,\"Doctype can not be appended since element is present\")}}function Q(e,t,n){var r=e.childNodes||[],o=t.childNodes||[];if(t.nodeType===k.DOCUMENT_FRAGMENT_NODE){var a=o.filter($);if(a.length>1||i(o,G))throw new C(O,\"More than one element or text in fragment\");if(1===a.length&&!W(e,n))throw new C(O,\"Element in fragment can not be inserted before doctype\")}if($(t)&&!W(e,n))throw new C(O,\"Only one element can be added and only after doctype\");if(V(t)){if(i(r,(function(e){return V(e)&&e!==n})))throw new C(O,\"Only one doctype is allowed\");var u=i(r,$);if(n&&r.indexOf(u)<r.indexOf(n))throw new C(O,\"Doctype can only be inserted before an element\")}}function K(e,t,n,r){(function(e,t,n){if(!function(e){return e&&(e.nodeType===k.DOCUMENT_NODE||e.nodeType===k.DOCUMENT_FRAGMENT_NODE||e.nodeType===k.ELEMENT_NODE)}(e))throw new C(O,\"Unexpected parent node type \"+e.nodeType);if(n&&n.parentNode!==e)throw new C(S,\"child not in parent\");if(!function(e){return e&&($(e)||G(e)||V(e)||e.nodeType===k.DOCUMENT_FRAGMENT_NODE||e.nodeType===k.COMMENT_NODE||e.nodeType===k.PROCESSING_INSTRUCTION_NODE)}(t)||V(t)&&e.nodeType!==k.DOCUMENT_NODE)throw new C(O,\"Unexpected node type \"+t.nodeType+\" for parent node type \"+e.nodeType)})(e,t,n),e.nodeType===k.DOCUMENT_NODE&&(r||Z)(e,t,n);var i=t.parentNode;if(i&&i.removeChild(t),t.nodeType===y){var o=t.firstChild;if(null==o)return t;var a=t.lastChild}else o=a=t;var u=n?n.previousSibling:e.lastChild;o.previousSibling=u,a.nextSibling=n,u?u.nextSibling=o:e.firstChild=o,null==n?e.lastChild=a:n.previousSibling=a;do{o.parentNode=e}while(o!==a&&(o=o.nextSibling));return B(e.ownerDocument||e,e),t.nodeType==y&&(t.firstChild=t.lastChild=null),t}function J(){this._nsMap={}}function ee(){}function te(){}function ne(){}function re(){}function ie(){}function oe(){}function ae(){}function ue(){}function se(){}function ce(){}function le(){}function pe(){}function fe(e,t){var n=[],r=9==this.nodeType&&this.documentElement||this,i=r.prefix,o=r.namespaceURI;if(o&&null==i&&null==(i=r.lookupPrefix(o)))var a=[{namespace:o,prefix:null}];return me(this,n,e,t,a),n.join(\"\")}function de(e,t,n){var r=e.prefix||\"\",i=e.namespaceURI;if(!i)return!1;if(\"xml\"===r&&i===o.XML||i===o.XMLNS)return!1;for(var a=n.length;a--;){var u=n[a];if(u.prefix===r)return u.namespace!==i}return!0}function he(e,t,n){e.push(\" \",t,'=\"',n.replace(/[<>&\"\\t\\n\\r]/g,X),'\"')}function me(e,t,n,r,i){if(i||(i=[]),r){if(!(e=r(e)))return;if(\"string\"==typeof e)return void t.push(e)}switch(e.nodeType){case f:var a=e.attributes,u=a.length,s=e.firstChild,c=e.tagName,l=c;if(!(n=o.isHTML(e.namespaceURI)||n)&&!e.prefix&&e.namespaceURI){for(var p,g=0;g<a.length;g++)if(\"xmlns\"===a.item(g).name){p=a.item(g).value;break}if(!p)for(var T=i.length-1;T>=0;T--)if(\"\"===(D=i[T]).prefix&&D.namespace===e.namespaceURI){p=D.namespace;break}if(p!==e.namespaceURI)for(T=i.length-1;T>=0;T--){var D;if((D=i[T]).namespace===e.namespaceURI){D.prefix&&(l=D.prefix+\":\"+c);break}}}t.push(\"<\",l);for(var x=0;x<u;x++)\"xmlns\"==(O=a.item(x)).prefix?i.push({prefix:O.localName,namespace:O.value}):\"xmlns\"==O.nodeName&&i.push({prefix:\"\",namespace:O.value});for(x=0;x<u;x++){var O,S,I;de(O=a.item(x),0,i)&&(he(t,(S=O.prefix||\"\")?\"xmlns:\"+S:\"xmlns\",I=O.namespaceURI),i.push({prefix:S,namespace:I})),me(O,t,n,r,i)}if(c===l&&de(e,0,i)&&(he(t,(S=e.prefix||\"\")?\"xmlns:\"+S:\"xmlns\",I=e.namespaceURI),i.push({prefix:S,namespace:I})),s||n&&!/^(?:meta|link|img|br|hr|input)$/i.test(c)){if(t.push(\">\"),n&&/^script$/i.test(c))for(;s;)s.data?t.push(s.data):me(s,t,n,r,i.slice()),s=s.nextSibling;else for(;s;)me(s,t,n,r,i.slice()),s=s.nextSibling;t.push(\"</\",l,\">\")}else t.push(\"/>\");return;case w:case y:for(s=e.firstChild;s;)me(s,t,n,r,i.slice()),s=s.nextSibling;return;case d:return he(t,e.name,e.value);case h:return t.push(e.data.replace(/[<&>]/g,X));case m:return t.push(\"<![CDATA[\",e.data,\"]]>\");case E:return t.push(\"\\x3c!--\",e.data,\"--\\x3e\");case b:var C=e.publicId,A=e.systemId;if(t.push(\"<!DOCTYPE \",e.name),C)t.push(\" PUBLIC \",C),A&&\".\"!=A&&t.push(\" \",A),t.push(\">\");else if(A&&\".\"!=A)t.push(\" SYSTEM \",A,\">\");else{var _=e.internalSubset;_&&t.push(\" [\",_,\"]\"),t.push(\">\")}return;case v:return t.push(\"<?\",e.target,\" \",e.data,\"?>\");case N:return t.push(\"&\",e.nodeName,\";\");default:t.push(\"??\",e.nodeName)}}function Ne(e,t,n){var r;switch(t.nodeType){case f:(r=t.cloneNode(!1)).ownerDocument=e;case y:break;case d:n=!0}if(r||(r=t.cloneNode(!1)),r.ownerDocument=e,r.parentNode=null,n)for(var i=t.firstChild;i;)r.appendChild(Ne(e,i,n)),i=i.nextSibling;return r}function ge(e,t,n){var r=new t.constructor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var o=t[i];\"object\"!=typeof o&&o!=r[i]&&(r[i]=o)}switch(t.childNodes&&(r.childNodes=new A),r.ownerDocument=e,r.nodeType){case f:var a=t.attributes,u=r.attributes=new R,s=a.length;u._ownerElement=r;for(var c=0;c<s;c++)r.setAttributeNode(ge(e,a.item(c),!0));break;case d:n=!0}if(n)for(var l=t.firstChild;l;)r.appendChild(ge(e,l,n)),l=l.nextSibling;return r}function ve(e,t,n){e[t]=n}D.INVALID_STATE_ERR=(x[11]=\"Invalid state\",11),D.SYNTAX_ERR=(x[12]=\"Syntax error\",12),D.INVALID_MODIFICATION_ERR=(x[13]=\"Invalid modification\",13),D.NAMESPACE_ERR=(x[14]=\"Invalid namespace\",14),D.INVALID_ACCESS_ERR=(x[15]=\"Invalid access\",15),C.prototype=Error.prototype,c(D,C),A.prototype={length:0,item:function(e){return this[e]||null},toString:function(e,t){for(var n=[],r=0;r<this.length;r++)me(this[r],n,e,t);return n.join(\"\")},filter:function(e){return Array.prototype.filter.call(this,e)},indexOf:function(e){return Array.prototype.indexOf.call(this,e)}},_.prototype.item=function(e){return M(this),this[e]},l(_,A),R.prototype={length:0,item:A.prototype.item,getNamedItem:function(e){for(var t=this.length;t--;){var n=this[t];if(n.nodeName==e)return n}},setNamedItem:function(e){var t=e.ownerElement;if(t&&t!=this._ownerElement)throw new C(I);var n=this.getNamedItem(e.nodeName);return P(this._ownerElement,this,e,n),n},setNamedItemNS:function(e){var t,n=e.ownerElement;if(n&&n!=this._ownerElement)throw new C(I);return t=this.getNamedItemNS(e.namespaceURI,e.localName),P(this._ownerElement,this,e,t),t},removeNamedItem:function(e){var t=this.getNamedItem(e);return U(this._ownerElement,this,t),t},removeNamedItemNS:function(e,t){var n=this.getNamedItemNS(e,t);return U(this._ownerElement,this,n),n},getNamedItemNS:function(e,t){for(var n=this.length;n--;){var r=this[n];if(r.localName==t&&r.namespaceURI==e)return r}return null}},F.prototype={hasFeature:function(e,t){return!0},createDocument:function(e,t,n){var r=new j;if(r.implementation=this,r.childNodes=new A,r.doctype=n||null,n&&r.appendChild(n),t){var i=r.createElementNS(e,t);r.appendChild(i)}return r},createDocumentType:function(e,t,n){var r=new oe;return r.name=e,r.nodeName=e,r.publicId=t||\"\",r.systemId=n||\"\",r}},k.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(e,t){return K(this,e,t)},replaceChild:function(e,t){K(this,e,t,Q),t&&this.removeChild(t)},removeChild:function(e){return z(this,e)},appendChild:function(e){return this.insertBefore(e,null)},hasChildNodes:function(){return null!=this.firstChild},cloneNode:function(e){return ge(this.ownerDocument||this,this,e)},normalize:function(){for(var e=this.firstChild;e;){var t=e.nextSibling;t&&t.nodeType==h&&e.nodeType==h?(this.removeChild(t),e.appendData(t.data)):(e.normalize(),e=t)}},isSupported:function(e,t){return this.ownerDocument.implementation.hasFeature(e,t)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(e){for(var t=this;t;){var n=t._nsMap;if(n)for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)&&n[r]===e)return r;t=t.nodeType==d?t.ownerDocument:t.parentNode}return null},lookupNamespaceURI:function(e){for(var t=this;t;){var n=t._nsMap;if(n&&Object.prototype.hasOwnProperty.call(n,e))return n[e];t=t.nodeType==d?t.ownerDocument:t.parentNode}return null},isDefaultNamespace:function(e){return null==this.lookupPrefix(e)}},c(p,k),c(p,k.prototype),j.prototype={nodeName:\"#document\",nodeType:w,doctype:null,documentElement:null,_inc:1,insertBefore:function(e,t){if(e.nodeType==y){for(var n=e.firstChild;n;){var r=n.nextSibling;this.insertBefore(n,t),n=r}return e}return K(this,e,t),e.ownerDocument=this,null===this.documentElement&&e.nodeType===f&&(this.documentElement=e),e},removeChild:function(e){return this.documentElement==e&&(this.documentElement=null),z(this,e)},replaceChild:function(e,t){K(this,e,t,Q),e.ownerDocument=this,t&&this.removeChild(t),$(e)&&(this.documentElement=e)},importNode:function(e,t){return Ne(this,e,t)},getElementById:function(e){var t=null;return H(this.documentElement,(function(n){if(n.nodeType==f&&n.getAttribute(\"id\")==e)return t=n,!0})),t},getElementsByClassName:function(e){var t=s(e);return new _(this,(function(n){var r=[];return t.length>0&&H(n.documentElement,(function(i){if(i!==n&&i.nodeType===f){var o=i.getAttribute(\"class\");if(o){var a=e===o;if(!a){var u=s(o);a=t.every((c=u,function(e){return c&&-1!==c.indexOf(e)}))}a&&r.push(i)}}var c})),r}))},createElement:function(e){var t=new J;return t.ownerDocument=this,t.nodeName=e,t.tagName=e,t.localName=e,t.childNodes=new A,(t.attributes=new R)._ownerElement=t,t},createDocumentFragment:function(){var e=new ce;return e.ownerDocument=this,e.childNodes=new A,e},createTextNode:function(e){var t=new ne;return t.ownerDocument=this,t.appendData(e),t},createComment:function(e){var t=new re;return t.ownerDocument=this,t.appendData(e),t},createCDATASection:function(e){var t=new ie;return t.ownerDocument=this,t.appendData(e),t},createProcessingInstruction:function(e,t){var n=new le;return n.ownerDocument=this,n.tagName=n.target=e,n.nodeValue=n.data=t,n},createAttribute:function(e){var t=new ee;return t.ownerDocument=this,t.name=e,t.nodeName=e,t.localName=e,t.specified=!0,t},createEntityReference:function(e){var t=new se;return t.ownerDocument=this,t.nodeName=e,t},createElementNS:function(e,t){var n=new J,r=t.split(\":\"),i=n.attributes=new R;return n.childNodes=new A,n.ownerDocument=this,n.nodeName=t,n.tagName=t,n.namespaceURI=e,2==r.length?(n.prefix=r[0],n.localName=r[1]):n.localName=t,i._ownerElement=n,n},createAttributeNS:function(e,t){var n=new ee,r=t.split(\":\");return n.ownerDocument=this,n.nodeName=t,n.name=t,n.namespaceURI=e,n.specified=!0,2==r.length?(n.prefix=r[0],n.localName=r[1]):n.localName=t,n}},l(j,k),J.prototype={nodeType:f,hasAttribute:function(e){return null!=this.getAttributeNode(e)},getAttribute:function(e){var t=this.getAttributeNode(e);return t&&t.value||\"\"},getAttributeNode:function(e){return this.attributes.getNamedItem(e)},setAttribute:function(e,t){var n=this.ownerDocument.createAttribute(e);n.value=n.nodeValue=\"\"+t,this.setAttributeNode(n)},removeAttribute:function(e){var t=this.getAttributeNode(e);t&&this.removeAttributeNode(t)},appendChild:function(e){return e.nodeType===y?this.insertBefore(e,null):function(e,t){return t.parentNode&&t.parentNode.removeChild(t),t.parentNode=e,t.previousSibling=e.lastChild,t.nextSibling=null,t.previousSibling?t.previousSibling.nextSibling=t:e.firstChild=t,e.lastChild=t,B(e.ownerDocument,e,t),t}(this,e)},setAttributeNode:function(e){return this.attributes.setNamedItem(e)},setAttributeNodeNS:function(e){return this.attributes.setNamedItemNS(e)},removeAttributeNode:function(e){return this.attributes.removeNamedItem(e.nodeName)},removeAttributeNS:function(e,t){var n=this.getAttributeNodeNS(e,t);n&&this.removeAttributeNode(n)},hasAttributeNS:function(e,t){return null!=this.getAttributeNodeNS(e,t)},getAttributeNS:function(e,t){var n=this.getAttributeNodeNS(e,t);return n&&n.value||\"\"},setAttributeNS:function(e,t,n){var r=this.ownerDocument.createAttributeNS(e,t);r.value=r.nodeValue=\"\"+n,this.setAttributeNode(r)},getAttributeNodeNS:function(e,t){return this.attributes.getNamedItemNS(e,t)},getElementsByTagName:function(e){return new _(this,(function(t){var n=[];return H(t,(function(r){r===t||r.nodeType!=f||\"*\"!==e&&r.tagName!=e||n.push(r)})),n}))},getElementsByTagNameNS:function(e,t){return new _(this,(function(n){var r=[];return H(n,(function(i){i===n||i.nodeType!==f||\"*\"!==e&&i.namespaceURI!==e||\"*\"!==t&&i.localName!=t||r.push(i)})),r}))}},j.prototype.getElementsByTagName=J.prototype.getElementsByTagName,j.prototype.getElementsByTagNameNS=J.prototype.getElementsByTagNameNS,l(J,k),ee.prototype.nodeType=d,l(ee,k),te.prototype={data:\"\",substringData:function(e,t){return this.data.substring(e,e+t)},appendData:function(e){e=this.data+e,this.nodeValue=this.data=e,this.length=e.length},insertData:function(e,t){this.replaceData(e,0,t)},appendChild:function(e){throw new Error(x[O])},deleteData:function(e,t){this.replaceData(e,t,\"\")},replaceData:function(e,t,n){n=this.data.substring(0,e)+n+this.data.substring(e+t),this.nodeValue=this.data=n,this.length=n.length}},l(te,k),ne.prototype={nodeName:\"#text\",nodeType:h,splitText:function(e){var t=this.data,n=t.substring(e);t=t.substring(0,e),this.data=this.nodeValue=t,this.length=t.length;var r=this.ownerDocument.createTextNode(n);return this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling),r}},l(ne,te),re.prototype={nodeName:\"#comment\",nodeType:E},l(re,te),ie.prototype={nodeName:\"#cdata-section\",nodeType:m},l(ie,te),oe.prototype.nodeType=b,l(oe,k),ae.prototype.nodeType=T,l(ae,k),ue.prototype.nodeType=g,l(ue,k),se.prototype.nodeType=N,l(se,k),ce.prototype.nodeName=\"#document-fragment\",ce.prototype.nodeType=y,l(ce,k),le.prototype.nodeType=v,l(le,k),pe.prototype.serializeToString=function(e,t,n){return fe.call(e,t,n)},k.prototype.toString=fe;try{if(Object.defineProperty){function Ee(e){switch(e.nodeType){case f:case y:var t=[];for(e=e.firstChild;e;)7!==e.nodeType&&8!==e.nodeType&&t.push(Ee(e)),e=e.nextSibling;return t.join(\"\");default:return e.nodeValue}}Object.defineProperty(_.prototype,\"length\",{get:function(){return M(this),this.$$length}}),Object.defineProperty(k.prototype,\"textContent\",{get:function(){return Ee(this)},set:function(e){switch(this.nodeType){case f:case y:for(;this.firstChild;)this.removeChild(this.firstChild);(e||String(e))&&this.appendChild(this.ownerDocument.createTextNode(e));break;default:this.data=e,this.value=e,this.nodeValue=e}}}),ve=function(e,t,n){e[\"$$\"+t]=n}}}catch(e){}t.DocumentType=oe,t.DOMException=C,t.DOMImplementation=F,t.Element=J,t.Node=k,t.NodeList=A,t.XMLSerializer=pe},45:(e,t,n)=>{var r=n(167).freeze;t.XML_ENTITIES=r({amp:\"&\",apos:\"'\",gt:\">\",lt:\"<\",quot:'\"'}),t.HTML_ENTITIES=r({lt:\"<\",gt:\">\",amp:\"&\",quot:'\"',apos:\"'\",Agrave:\"À\",Aacute:\"Á\",Acirc:\"Â\",Atilde:\"Ã\",Auml:\"Ä\",Aring:\"Å\",AElig:\"Æ\",Ccedil:\"Ç\",Egrave:\"È\",Eacute:\"É\",Ecirc:\"Ê\",Euml:\"Ë\",Igrave:\"Ì\",Iacute:\"Í\",Icirc:\"Î\",Iuml:\"Ï\",ETH:\"Ð\",Ntilde:\"Ñ\",Ograve:\"Ò\",Oacute:\"Ó\",Ocirc:\"Ô\",Otilde:\"Õ\",Ouml:\"Ö\",Oslash:\"Ø\",Ugrave:\"Ù\",Uacute:\"Ú\",Ucirc:\"Û\",Uuml:\"Ü\",Yacute:\"Ý\",THORN:\"Þ\",szlig:\"ß\",agrave:\"à\",aacute:\"á\",acirc:\"â\",atilde:\"ã\",auml:\"ä\",aring:\"å\",aelig:\"æ\",ccedil:\"ç\",egrave:\"è\",eacute:\"é\",ecirc:\"ê\",euml:\"ë\",igrave:\"ì\",iacute:\"í\",icirc:\"î\",iuml:\"ï\",eth:\"ð\",ntilde:\"ñ\",ograve:\"ò\",oacute:\"ó\",ocirc:\"ô\",otilde:\"õ\",ouml:\"ö\",oslash:\"ø\",ugrave:\"ù\",uacute:\"ú\",ucirc:\"û\",uuml:\"ü\",yacute:\"ý\",thorn:\"þ\",yuml:\"ÿ\",nbsp:\" \",iexcl:\"¡\",cent:\"¢\",pound:\"£\",curren:\"¤\",yen:\"¥\",brvbar:\"¦\",sect:\"§\",uml:\"¨\",copy:\"©\",ordf:\"ª\",laquo:\"«\",not:\"¬\",shy:\"­­\",reg:\"®\",macr:\"¯\",deg:\"°\",plusmn:\"±\",sup2:\"²\",sup3:\"³\",acute:\"´\",micro:\"µ\",para:\"¶\",middot:\"·\",cedil:\"¸\",sup1:\"¹\",ordm:\"º\",raquo:\"»\",frac14:\"¼\",frac12:\"½\",frac34:\"¾\",iquest:\"¿\",times:\"×\",divide:\"÷\",forall:\"∀\",part:\"∂\",exist:\"∃\",empty:\"∅\",nabla:\"∇\",isin:\"∈\",notin:\"∉\",ni:\"∋\",prod:\"∏\",sum:\"∑\",minus:\"−\",lowast:\"∗\",radic:\"√\",prop:\"∝\",infin:\"∞\",ang:\"∠\",and:\"∧\",or:\"∨\",cap:\"∩\",cup:\"∪\",int:\"∫\",there4:\"∴\",sim:\"∼\",cong:\"≅\",asymp:\"≈\",ne:\"≠\",equiv:\"≡\",le:\"≤\",ge:\"≥\",sub:\"⊂\",sup:\"⊃\",nsub:\"⊄\",sube:\"⊆\",supe:\"⊇\",oplus:\"⊕\",otimes:\"⊗\",perp:\"⊥\",sdot:\"⋅\",Alpha:\"Α\",Beta:\"Β\",Gamma:\"Γ\",Delta:\"Δ\",Epsilon:\"Ε\",Zeta:\"Ζ\",Eta:\"Η\",Theta:\"Θ\",Iota:\"Ι\",Kappa:\"Κ\",Lambda:\"Λ\",Mu:\"Μ\",Nu:\"Ν\",Xi:\"Ξ\",Omicron:\"Ο\",Pi:\"Π\",Rho:\"Ρ\",Sigma:\"Σ\",Tau:\"Τ\",Upsilon:\"Υ\",Phi:\"Φ\",Chi:\"Χ\",Psi:\"Ψ\",Omega:\"Ω\",alpha:\"α\",beta:\"β\",gamma:\"γ\",delta:\"δ\",epsilon:\"ε\",zeta:\"ζ\",eta:\"η\",theta:\"θ\",iota:\"ι\",kappa:\"κ\",lambda:\"λ\",mu:\"μ\",nu:\"ν\",xi:\"ξ\",omicron:\"ο\",pi:\"π\",rho:\"ρ\",sigmaf:\"ς\",sigma:\"σ\",tau:\"τ\",upsilon:\"υ\",phi:\"φ\",chi:\"χ\",psi:\"ψ\",omega:\"ω\",thetasym:\"ϑ\",upsih:\"ϒ\",piv:\"ϖ\",OElig:\"Œ\",oelig:\"œ\",Scaron:\"Š\",scaron:\"š\",Yuml:\"Ÿ\",fnof:\"ƒ\",circ:\"ˆ\",tilde:\"˜\",ensp:\" \",emsp:\" \",thinsp:\" \",zwnj:\"‌\",zwj:\"‍\",lrm:\"‎\",rlm:\"‏\",ndash:\"–\",mdash:\"—\",lsquo:\"‘\",rsquo:\"’\",sbquo:\"‚\",ldquo:\"“\",rdquo:\"”\",bdquo:\"„\",dagger:\"†\",Dagger:\"‡\",bull:\"•\",hellip:\"…\",permil:\"‰\",prime:\"′\",Prime:\"″\",lsaquo:\"‹\",rsaquo:\"›\",oline:\"‾\",euro:\"€\",trade:\"™\",larr:\"←\",uarr:\"↑\",rarr:\"→\",darr:\"↓\",harr:\"↔\",crarr:\"↵\",lceil:\"⌈\",rceil:\"⌉\",lfloor:\"⌊\",rfloor:\"⌋\",loz:\"◊\",spades:\"♠\",clubs:\"♣\",hearts:\"♥\",diams:\"♦\"}),t.entityMap=t.HTML_ENTITIES},969:(e,t,n)=>{var r=n(146);t.DOMImplementation=r.DOMImplementation,t.XMLSerializer=r.XMLSerializer,t.DOMParser=n(129).DOMParser},925:(e,t,n)=>{var r=n(167).NAMESPACE,i=/[A-Z_a-z\\xC0-\\xD6\\xD8-\\xF6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD]/,o=new RegExp(\"[\\\\-\\\\.0-9\"+i.source.slice(1,-1)+\"\\\\u00B7\\\\u0300-\\\\u036F\\\\u203F-\\\\u2040]\"),a=new RegExp(\"^\"+i.source+o.source+\"*(?::\"+i.source+o.source+\"*)?$\");function u(e,t){this.message=e,this.locator=t,Error.captureStackTrace&&Error.captureStackTrace(this,u)}function s(){}function c(e,t){return t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber,t}function l(e,t,n,i,o,a){function u(e,t,r){n.attributeNames.hasOwnProperty(e)&&a.fatalError(\"Attribute \"+e+\" redefined\"),n.addValue(e,t.replace(/[\\t\\n\\r]/g,\" \").replace(/&#?\\w+;/g,o),r)}for(var s,c=++t,l=0;;){var p=e.charAt(c);switch(p){case\"=\":if(1===l)s=e.slice(t,c),l=3;else{if(2!==l)throw new Error(\"attribute equal must after attrName\");l=3}break;case\"'\":case'\"':if(3===l||1===l){if(1===l&&(a.warning('attribute value must after \"=\"'),s=e.slice(t,c)),t=c+1,!((c=e.indexOf(p,t))>0))throw new Error(\"attribute value no end '\"+p+\"' match\");u(s,f=e.slice(t,c),t-1),l=5}else{if(4!=l)throw new Error('attribute value must after \"=\"');u(s,f=e.slice(t,c),t),a.warning('attribute \"'+s+'\" missed start quot('+p+\")!!\"),t=c+1,l=5}break;case\"/\":switch(l){case 0:n.setTagName(e.slice(t,c));case 5:case 6:case 7:l=7,n.closed=!0;case 4:case 1:case 2:break;default:throw new Error(\"attribute invalid close char('/')\")}break;case\"\":return a.error(\"unexpected end of input\"),0==l&&n.setTagName(e.slice(t,c)),c;case\">\":switch(l){case 0:n.setTagName(e.slice(t,c));case 5:case 6:case 7:break;case 4:case 1:\"/\"===(f=e.slice(t,c)).slice(-1)&&(n.closed=!0,f=f.slice(0,-1));case 2:2===l&&(f=s),4==l?(a.warning('attribute \"'+f+'\" missed quot(\")!'),u(s,f,t)):(r.isHTML(i[\"\"])&&f.match(/^(?:disabled|checked|selected)$/i)||a.warning('attribute \"'+f+'\" missed value!! \"'+f+'\" instead!!'),u(f,f,t));break;case 3:throw new Error(\"attribute value missed!!\")}return c;case\"\":p=\" \";default:if(p<=\" \")switch(l){case 0:n.setTagName(e.slice(t,c)),l=6;break;case 1:s=e.slice(t,c),l=2;break;case 4:var f=e.slice(t,c);a.warning('attribute \"'+f+'\" missed quot(\")!!'),u(s,f,t);case 5:l=6}else switch(l){case 2:n.tagName,r.isHTML(i[\"\"])&&s.match(/^(?:disabled|checked|selected)$/i)||a.warning('attribute \"'+s+'\" missed value!! \"'+s+'\" instead2!!'),u(s,s,t),t=c,l=1;break;case 5:a.warning('attribute space is required\"'+s+'\"!!');case 6:l=1,t=c;break;case 3:l=4,t=c;break;case 7:throw new Error(\"elements closed character '/' and '>' must be connected to\")}}c++}}function p(e,t,n){for(var i=e.tagName,o=null,a=e.length;a--;){var u=e[a],s=u.qName,c=u.value;if((d=s.indexOf(\":\"))>0)var l=u.prefix=s.slice(0,d),p=s.slice(d+1),f=\"xmlns\"===l&&p;else p=s,l=null,f=\"xmlns\"===s&&\"\";u.localName=p,!1!==f&&(null==o&&(o={},h(n,n={})),n[f]=o[f]=c,u.uri=r.XMLNS,t.startPrefixMapping(f,c))}for(a=e.length;a--;)(l=(u=e[a]).prefix)&&(\"xml\"===l&&(u.uri=r.XML),\"xmlns\"!==l&&(u.uri=n[l||\"\"]));var d;(d=i.indexOf(\":\"))>0?(l=e.prefix=i.slice(0,d),p=e.localName=i.slice(d+1)):(l=null,p=e.localName=i);var m=e.uri=n[l||\"\"];if(t.startElement(m,p,i,e),!e.closed)return e.currentNSMap=n,e.localNSMap=o,!0;if(t.endElement(m,p,i),o)for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&t.endPrefixMapping(l)}function f(e,t,n,r,i){if(/^(?:script|textarea)$/i.test(n)){var o=e.indexOf(\"</\"+n+\">\",t),a=e.substring(t+1,o);if(/[&<]/.test(a))return/^script$/i.test(n)?(i.characters(a,0,a.length),o):(a=a.replace(/&#?\\w+;/g,r),i.characters(a,0,a.length),o)}return t+1}function d(e,t,n,r){var i=r[n];return null==i&&((i=e.lastIndexOf(\"</\"+n+\">\"))<t&&(i=e.lastIndexOf(\"</\"+n)),r[n]=i),i<t}function h(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}function m(e,t,n,r){if(\"-\"===e.charAt(t+2))return\"-\"===e.charAt(t+3)?(i=e.indexOf(\"--\\x3e\",t+4))>t?(n.comment(e,t+4,i-t-4),i+3):(r.error(\"Unclosed comment\"),-1):-1;if(\"CDATA[\"==e.substr(t+3,6)){var i=e.indexOf(\"]]>\",t+9);return n.startCDATA(),n.characters(e,t+9,i-t-9),n.endCDATA(),i+3}var o=function(e,t){var n,r=[],i=/'[^']+'|\"[^\"]+\"|[^\\s<>\\/=]+=?|(\\/?\\s*>|<)/g;for(i.lastIndex=t,i.exec(e);n=i.exec(e);)if(r.push(n),n[1])return r}(e,t),a=o.length;if(a>1&&/!doctype/i.test(o[0][0])){var u=o[1][0],s=!1,c=!1;a>3&&(/^public$/i.test(o[2][0])?(s=o[3][0],c=a>4&&o[4][0]):/^system$/i.test(o[2][0])&&(c=o[3][0]));var l=o[a-1];return n.startDTD(u,s,c),n.endDTD(),l.index+l[0].length}return-1}function N(e,t,n){var r=e.indexOf(\"?>\",t);if(r){var i=e.substring(t,r).match(/^<\\?(\\S*)\\s*([\\s\\S]*?)\\s*$/);return i?(i[0].length,n.processingInstruction(i[1],i[2]),r+2):-1}return-1}function g(){this.attributeNames={}}u.prototype=new Error,u.prototype.name=u.name,s.prototype={parse:function(e,t,n){var i=this.domBuilder;i.startDocument(),h(t,t={}),function(e,t,n,i,o){function a(e){var t=e.slice(1,-1);return Object.hasOwnProperty.call(n,t)?n[t]:\"#\"===t.charAt(0)?function(e){if(e>65535){var t=55296+((e-=65536)>>10),n=56320+(1023&e);return String.fromCharCode(t,n)}return String.fromCharCode(e)}(parseInt(t.substr(1).replace(\"x\",\"0x\"))):(o.error(\"entity not found:\"+e),e)}function s(t){if(t>D){var n=e.substring(D,t).replace(/&#?\\w+;/g,a);b&&h(D),i.characters(n,0,t-D),D=t}}function h(t,n){for(;t>=E&&(n=w.exec(e));)v=n.index,E=v+n[0].length,b.lineNumber++;b.columnNumber=t-v+1}for(var v=0,E=0,w=/.*(?:\\r\\n?|\\n)|.*$/g,b=i.locator,y=[{currentNSMap:t}],T={},D=0;;){try{var x=e.indexOf(\"<\",D);if(x<0){if(!e.substr(D).match(/^\\s*$/)){var O=i.doc,S=O.createTextNode(e.substr(D));O.appendChild(S),i.currentElement=S}return}switch(x>D&&s(x),e.charAt(x+1)){case\"/\":var I=e.indexOf(\">\",x+3),C=e.substring(x+2,I).replace(/[ \\t\\n\\r]+$/g,\"\"),A=y.pop();I<0?(C=e.substring(x+2).replace(/[\\s<].*/,\"\"),o.error(\"end tag name: \"+C+\" is not complete:\"+A.tagName),I=x+1+C.length):C.match(/\\s</)&&(C=C.replace(/[\\s<].*/,\"\"),o.error(\"end tag name: \"+C+\" maybe not complete\"),I=x+1+C.length);var _=A.localNSMap,M=A.tagName==C;if(M||A.tagName&&A.tagName.toLowerCase()==C.toLowerCase()){if(i.endElement(A.uri,A.localName,C),_)for(var R in _)Object.prototype.hasOwnProperty.call(_,R)&&i.endPrefixMapping(R);M||o.fatalError(\"end tag name: \"+C+\" is not match the current start tagName:\"+A.tagName)}else y.push(A);I++;break;case\"?\":b&&h(x),I=N(e,x,i);break;case\"!\":b&&h(x),I=m(e,x,i,o);break;default:b&&h(x);var L=new g,P=y[y.length-1].currentNSMap,U=(I=l(e,x,L,P,a,o),L.length);if(!L.closed&&d(e,I,L.tagName,T)&&(L.closed=!0,n.nbsp||o.warning(\"unclosed xml attribute\")),b&&U){for(var F=c(b,{}),k=0;k<U;k++){var X=L[k];h(X.offset),X.locator=c(b,{})}i.locator=F,p(L,i,P)&&y.push(L),i.locator=b}else p(L,i,P)&&y.push(L);r.isHTML(L.uri)&&!L.closed?I=f(e,I,L.tagName,a,i):I++}}catch(e){if(e instanceof u)throw e;o.error(\"element parse error: \"+e),I=-1}I>D?D=I:s(Math.max(x,D)+1)}}(e,t,n,i,this.errorHandler),i.endDocument()}},g.prototype={setTagName:function(e){if(!a.test(e))throw new Error(\"invalid tagName:\"+e);this.tagName=e},addValue:function(e,t,n){if(!a.test(e))throw new Error(\"invalid attribute:\"+e);this.attributeNames[e]=this.length,this[this.length++]={qName:e,value:t,offset:n}},length:0,getLocalName:function(e){return this[e].localName},getLocator:function(e){return this[e].locator},getQName:function(e){return this[e].qName},getURI:function(e){return this[e].uri},getValue:function(e){return this[e].value}},t.XMLReader=s,t.ParseError=u},24:(e,t,n)=>{\"use strict\";var r=n(969),i=function(){};e.exports=function(e,t){e.window=e,e.self=e,e.top=e,e.parent=e;var n=new r.DOMParser({errorHandler:{warning:i,error:i,fatalError:i}}).parseFromString(String(t),\"text/html\");e.document=n}}},t={},n=function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(24);_=n})();return _})()";
exports.WINDOW = WINDOW;
//# sourceMappingURL=data.js.map
