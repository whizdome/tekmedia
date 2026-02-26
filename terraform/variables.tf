variable "region" {
  default = "eu-west-1"
}

variable "cluster_name" {
  default = "app-eks-cluster"
}

variable "aws_account_id" {
  description = "AWS Account ID"
}

variable "github_actions_role_name" {
  description = "Name of the IAM role used by GitHub Actions"
}