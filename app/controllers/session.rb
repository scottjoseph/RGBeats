post '/session' do
    @user = User.find_by(username: params[:username])
    if request.xhr?
      session[:user_id] = @user.id
      if @user && @user.authentic?(params[:password])
        redirect '/' #redirect to somewhere else
      else
        # erb :'users/login'
        redirect '/'
      end
    end
end
