class User < ApplicationRecord
    has_many :appointments, dependent: :destroy
    # has_many :comments, dependent: :destroy 
end
