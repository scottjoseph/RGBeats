get '/' do
  if logged_in?
    redirect '/users'
  else
    erb :'index'
  end
end
