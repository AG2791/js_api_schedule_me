class Api::V1::AppointmentsController < ApplicationController
    
    def index
        appointments = Appointment.all
        render json: appointments, status: 200 
       # use a fastjson sserialzer here to filter 
    end

    # orignal controller 
    # def index
    #     appointments = Appointment.all
    #     # render json: AppointmentSerialzer.new(appointment)
    #     options = { include: [:user, :comments] }
    #     render json: AppointmentSerializer.new(appointments, options)
    # end

    def show 
        appointment = Appointment.find(params[:id])
        render json: appointment, status: 200 
        #  possible place to also render comments/descriptions?
    end

    def new
         appointment = Appointment.new 
        #  an unsaved instance of appointment 
    end
 
    def create
        appointment = Appointment.new(appointment_params)
        # appointment.user_id = current_user.id   
        if appointment.save
             render json: appointment, status: 200  
        else
            render json: appointment.errors, status: :Error 
        end
    end

     
     # suggested
    # def update 
    #     appointment = appointment.find(params[:id])
    #     appointment.update(note_params) 
    #     render json: appointment, status: 200 
    # end

    def update
        appointment = Appointment.find(params[:id])
        # appointment.update(appointment_params)  may need this later 
          if appointment.update(appointment_params)
            render json: appointment, status: 200, location: appointment
          else
           render json: appointment.errors, status: :Error 
          end
    end

    def destroy 
        appointment = Appointment.find(params[:id])
        appointment.delete 

        render json: {appointmentId: appointment.id} 
    end


    private 

    def appointment_params
        params.require(:appointment).permit(:name, :start_time, :end_time)
        # params.require(:appointment).permit(:name, :start_time, :end_time, :user_id)
                                                                    #    for users 
    end

end
   