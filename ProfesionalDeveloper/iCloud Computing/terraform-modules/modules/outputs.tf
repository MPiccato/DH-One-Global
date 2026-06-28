output "bucket_name" {
  description = "Nombre del bucket S3"
  value       = aws_s3_bucket.s3_bucket.bucket
}

output "url" {
  description = "URL del sitio web alojado en el bucket S3"
  value       = aws_s3_bucket_website_configuration.s3_bucket.website_domain
}
