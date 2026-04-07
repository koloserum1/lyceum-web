import { type SchemaTypeDefinition } from "sanity";
import { dodLeadType } from "./dodLeadType";
import { dodPageType } from "./dodPageType";
import { dodPopupType } from "./dodPopupType";
import { postType } from "./postType";
import { prijimackyPopupType } from "./prijimackyPopupType";

export const schemaTypes: SchemaTypeDefinition[] = [
  dodPopupType,
  prijimackyPopupType,
  dodPageType,
  dodLeadType,
  postType,
];
