variable "region" {
  default = "eu-west-1"
}

variable "cluster_name" {
  default = "app-eks-cluster"
}
variable "github_actions_role_arn" {
  description = "ARN of the IAM role used by GitHub Actions"
}