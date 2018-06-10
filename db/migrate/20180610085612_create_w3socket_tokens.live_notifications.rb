# This migration comes from live_notifications (originally 20180416061102)
class CreateW3socketTokens < ActiveRecord::Migration[4.2]
  def change
    create_table :w3socket_tokens do |t|
    	t.string :token
      t.timestamps null: false
    end
  end
end
