get '/users' do
  erb :'index'
end

get '/users/new' do
  @new_user = User.new
  if request.xhr?
    erb :'users/new', layout: false
  end
end

post '/users' do
  @user = User.new(params[:user])
  # if request.xhr?
    if @user.save
      session[:user_id] = @user.id
      redirect '/'
    end
  # end
end

get '/users/login' do
  @user = User.new
  if request.xhr?
    erb :'users/_login', layout: false
  end
end

get '/users/:id/logout' do
  session.delete(:user_id)
  redirect '/'
end

# get '/users/:id' do
#   @user = User.find(params[:id])
#   erb :'users/show'
# end

# get '/users/:id/edit' do
#   @user = User.find(params[:id]) #define intstance variable for view
#   erb :'users/edit' #shows view with edit user form
# end

# put '/users/:id' do
#   @user = User.find(params[:id])
#   @user.assign_attributes(params[:user])
#   if @user.save
#     redirect '/users'
#   else
#     erb :errors
#   end
# end

# delete '/users/:id' do
#   @user = User.find(params[:id])
#   @user.clear
#   redirect '/users'
# end

