class CreateUser < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, :email, :encrypted_password

      t.timestamps null: false
    end
  end
end
