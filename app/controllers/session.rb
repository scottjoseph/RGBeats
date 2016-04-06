get '/session/new' do
  if request.xhr?
    erb :'users/_login', layout: false
  else
    @user = User.new
    erb :'users/login'
  end
end

post '/session' do
  @user = User.find_by(username: params[:username])
  if @user && @user.authentic?(params[:password])
    if request.xhr?
      session[:user_id] = @user.id
      redirect '/'
    else
      # session[:user_id] = @user.id
      # redirect '/'
    end
  else
    status 422
    if request.xhr?
      erb :"_errors", layout: false
    else
      erb :'/users/login'
    end
  end
end

get '/logout' do
  session.clear
  redirect '/'
end
