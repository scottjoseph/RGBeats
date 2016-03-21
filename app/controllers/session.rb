post '/session' do
  @user = User.find_by(username: params[:username])
    if @user && @user.authentic?(params[:password])
      session[:user_id] = @user.id
      redirect '/'
    else
      erb :'users/_login', layout: false
    end
end
