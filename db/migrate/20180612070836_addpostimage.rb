class Addpostimage < ActiveRecord::Migration[5.1]
  def change
  	add_attachment :posts, :img
  end
end
