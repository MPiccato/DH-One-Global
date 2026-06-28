variable "name" {
  description = "Nombre de mi recurso"
  type        = string
}

variable "tags" {
  description = "Etiquetas de mi recursos"
  type        = map(string)
}
