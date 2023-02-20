export function login_validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // Validation for password
  if (!values.password) {
    errors.password = 'Field is required';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Must be greater then 8 and less then 20 charaters long';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid Password';
  }

  if (!values.emailSignIn) {
    errors.emailSignIn = 'Field is required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailSignIn)
  ) {
    errors.emailSignIn = 'Invalid email address';
  }

  return errors;
}

export function register_validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Field is required';
  } else if (values.name.includes(' ')) {
    errors.name = 'Invalid name';
  }

  if (!values.email) {
    errors.email = 'Field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // Validation for password
  if (!values.password) {
    errors.password = 'Field is required';
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = 'Must be greater then 8 and less then 20 charaters long';
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid Password';
  }

  // Validation for confirm password
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Field is required';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Password does not match';
  } else if (values.confirmPassword.includes(' ')) {
    errors.confirmPassword = 'Invalid confirm password';
  }

  return errors;
}

export function contact_us_validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.subject) {
    errors.subject = 'Field is required';
  } else if (values.subject.length > 50) {
    errors.subject = 'Subject line must be less than 50 characters';
  }

  if (!values.message) {
    errors.message = 'Field is required';
  } else if (values.message.length > 500) {
    errors.message = 'Message cannot exceed 500 characters.';
  }

  return errors;
}
