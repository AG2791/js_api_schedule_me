class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.string :name
      # t.date :day 
      t.datetime :start_time 
      t.datetime :end_time
      t.references :user, foreign_key: true


      t.timestamps
    end
  end
end
