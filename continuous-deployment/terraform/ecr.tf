resource "aws_ecr_repository" "app" {
  name = "my-app"

  image_scanning_configuration {
    scan_on_push = true
  }
}