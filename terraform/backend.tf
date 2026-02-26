terraform {
  backend "s3" {
    bucket         = "state-bucket-02-2026"
    key            = "eks/app/terraform.tfstate"
    region         = "eu-west-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}