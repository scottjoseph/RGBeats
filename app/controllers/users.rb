# before '/users/*' do
#   redirect '/' unless logged_in?
# end

get '/users' do
  erb :'users/index'
end

get '/users/new' do
  @new_user = User.new
  if request.xhr?
    erb :'users/_new', layout: false
  else
    erb :'users/new'
  end
end

post '/users' do
  @user = User.new(params[:user])
  if request.xhr?
    if @user.save
      session[:user_id] = @user.id
      redirect '/'
    else
      # session[:user_id] = @user.id
      # redirect '/'
    end
  else
    status 422
    if request.xhr?

    else
      @errors = @user.errors.full_messages
      erb :'users/new'
    end
  end
end


get '/users/:id' do
    @user = User.find(params[:id])
    erb :'users/show'
end

# get '/users/:id/edit' do
#   @user = User.find(params[:id]) #define intstance variable for view
#   if owner?
#     erb :'users/edit' #shows view with edit user form
#   else
#     redirect "/"
#   end
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

delete '/users/:id' do
  if owner?
    puts "logged in as test. wtf"
    @user = User.find(params[:id])
    @user.delete
    redirect '/'
  else
    redirect '/'
  end
end

