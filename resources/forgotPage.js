'use strict';

module.exports = `
<!DOCTYPE html>
<html>
<head>
  <title>Change Password</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
    crossorigin="anonymous">
  <body>
    <div class="container">
      <h4>Reset Password For Account</h4>
      <br/>
      <form name="request-code" method="post" action="requestCode">
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Enter Username</label>
          <div class="col-sm-4">
            <input type="text" class="form-control" name="username" placeholder="email">
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Continue</button>
      </form>
    </div>
  </body>
</html>
`;
