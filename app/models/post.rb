class Post < ApplicationRecord
	belongs_to :user
	has_many :likes
	has_attached_file :img
	validates_attachment_content_type :img, content_type: /\Aimage\/.*\z/
end
