require 'bcrypt'

class User < ActiveRecord::Base
  include BCrypt
  has_many :reviews
  has_many :restaurants

  validates_presence_of :username, :email, :encrypted_password
  validates_uniqueness_of :email


  def password
    @password ||= BCrypt::Password.new(encrypted_password)
  end

  def password=(plaintext_password)
    @password = BCrypt::Password.create(plaintext_password)
    self.encrypted_password = @password
  end

  def authentic?(plaintext_password)
    self.password == plaintext_password
  end

end

