require 'test_helper'

class ApiControllerTest < ActionDispatch::IntegrationTest
  test 'should get random_greeting' do
    get api_random_greeting_url
    assert_response :success
  end
end
