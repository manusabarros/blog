import { Annotations } from "../models/notion";

export const getStyleProps = (annotations: Annotations) => ({
  color: annotations.color,
  fontWeight: annotations.bold ? "bold" : "",
  fontFamily: annotations.code ? "mono" : "",
  fontStyle: annotations.italic ? "italic" : "",
  textDecoration: annotations.strikethrough ? "line-through" : annotations.underline ? "underline" : "",
});
