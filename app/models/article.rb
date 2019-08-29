class Article < ApplicationRecord
  mount_uploader :image, ImageUploader
  belongs_to :user
  validates :title, :content, presence: true
end
