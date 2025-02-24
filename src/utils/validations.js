export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
};

export const validateForm = (data, rules) => {
  const errors = {};

  Object.keys(rules).forEach((field) => {
    const value = data[field];
    const fieldRules = rules[field];

    // Required field validation
    if (fieldRules.required && !value) {
      errors[field] = `${field} is required`;
      return;
    }

    if (value) {
      // Minimum length validation
      if (fieldRules.minLength && value.length < fieldRules.minLength) {
        errors[field] = `${field} must be at least ${fieldRules.minLength} characters`;
      }

      // Maximum length validation
      if (fieldRules.maxLength && value.length > fieldRules.maxLength) {
        errors[field] = `${field} must not exceed ${fieldRules.maxLength} characters`;
      }

      // Pattern validation
      if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
        errors[field] = `${field} format is invalid`;
      }

      // Email validation
      if (fieldRules.email && !validateEmail(value)) {
        errors[field] = 'Invalid email address';
      }

      // Password match validation
      if (fieldRules.match && data[fieldRules.match] !== value) {
        errors[field] = 'Passwords do not match';
      }
    }
  });

  return errors;
};

export const validateProduct = (product) => {
  const errors = {};

  if (!product.name || product.name.trim().length < 3) {
    errors.name = 'Product name must be at least 3 characters';
  }

  if (!product.price || product.price <= 0) {
    errors.price = 'Price must be greater than 0';
  }

  if (!product.description || product.description.trim().length < 10) {
    errors.description = 'Description must be at least 10 characters';
  }

  if (!product.image || !isValidImageUrl(product.image)) {
    errors.image = 'Please provide a valid image URL';
  }

  return errors;
};

const isValidImageUrl = (url) => {
  try {
    const parsedUrl = new URL(url);
    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    return validExtensions.some(ext => parsedUrl.pathname.toLowerCase().endsWith(ext));
  } catch {
    return false;
  }
};
