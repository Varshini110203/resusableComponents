export const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

export const isEmpty = (value) =>
  value === undefined || value === null || value === '';

export const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(); 
export const truncateString = (str, num) =>
  str.length <= num ? str : str.slice(0, num) + '...';
export const generateRandomId = () =>
  Math.random().toString(36).substr(2, 9);  
export const debounce = (func, delay) => {
  let timeoutId;        
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
};
export const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const parseQueryString = (queryString) => {
  const params = new URLSearchParams(queryString);
  const result = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
};
export const buildQueryString = (params) => {
  const queryString = new URLSearchParams(params).toString();
  return queryString ? `?${queryString}` : '';
};
export const clamp = (num, min, max) => Math.min(Math.max(num, min), max);  
export const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;    
export const arrayChunk = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};
export const flattenArray = (arr) => arr.reduce((flat, toFlatten) =>
  flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
export const uniqueArray = (arr) => [...new Set(arr)];
export const intersection = (arr1, arr2) =>
  arr1.filter((value) => arr2.includes(value));
export const difference = (arr1, arr2) =>
  arr1.filter((value) => !arr2.includes(value));
export const union = (arr1, arr2) => uniqueArray([...arr1, ...arr2]);
export const zipArrays = (arr1, arr2) =>
  arr1.map((value, index) => [value, arr2[index]]);
export const unzipArray = (arr) =>
  arr[0].map((_, index) => arr.map((row) => row[index]));
export const groupBy = (arr, key) =>
  arr.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
export const sortByKey = (arr, key) =>
  [...arr].sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
export const paginate = (arr, pageSize, pageNumber) =>
  arr.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
export const formatCurrency = (amount, currency = 'USD') =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
export const formatNumber = (number, options = {}) =>
  new Intl.NumberFormat('en-US', options).format(number);   
export const capitalizeWords = (str) =>
  str.replace(/\b\w/g, (char) => char.toUpperCase());
export const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-');
export const deslugify = (str) =>
  str
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
export const getNestedValue = (obj, path, defaultValue = undefined) => {
  return path
    .split('.')
    .reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : defaultValue), obj);
}
export const setNestedValue = (obj, path, value) => {
  const keys = path.split('.');
  let current = obj;
  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      current[key] = value;
    } else {
      if (!current[key]) current[key] = {};
      current = current[key];
    }
  });
};
export const removeNestedValue = (obj, path) => {
  const keys = path.split('.');
  let current = obj;    
  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      delete current[key];
    } else {
      if (!current[key]) return;
      current = current[key];
    }
  });
};
export const isObjectEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;      
};
export const clampArrayValues = (arr, min, max) =>
  arr.map((num) => clamp(num, min, max));
export const sumArray = (arr) => arr.reduce((total, num) => total + num, 0);
export const averageArray = (arr) =>
  arr.length === 0 ? 0 : sumArray(arr) / arr.length;
export const medianArray = (arr) => {
  if (arr.length === 0) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
};  
export const modeArray = (arr) => {
  const frequency = {};
  let maxFreq = 0;
  let mode;
  arr.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
      mode = num;
    }
  });
  return mode;
};
export const range = (start, end, step = 1) => {
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
};
export const factorial = (n) => {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};
export const fibonacci = (n) => {
  if (n < 0) return undefined;
  const fib = [0, 1];   
    for (let i = 2; i <= n; i++) {  
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
};
export const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};
export const primeFactors = (n) => {
  const factors = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  return factors;
};
export const gcd = (a, b) => {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
};
export const lcm = (a, b) => (a * b) / gcd(a, b);
export const toCamelCase = (str) => {
    return str
        .replace(/[-_ ]+(\w)/g, (_, c) => c.toUpperCase())
        .replace(/^\w/, (c) => c.toLowerCase());
};
export const toKebabCase = (str) => {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}
export const toSnakeCase = (str) => {
    return str
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[\s-]+/g, '_')
        .toLowerCase();
}   
export const escapeHtml = (str) => {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}
export const unescapeHtml = (str) => {
    const div = document.createElement('div');
    div.innerHTML = str;
    return div.textContent || div.innerText || '';
}
export const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
export const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);  
    if (interval >= 1) return interval + ' year' + (interval > 1 ? 's' : '') + ' ago';
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return interval + ' month' + (interval > 1 ? 's' : '') + ' ago';
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return interval + ' day' + (interval > 1 ? 's' : '') + ' ago';
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return interval + ' hour' + (interval > 1 ? 's' : '') + ' ago';
    interval = Math.floor(seconds / 60);
    if (interval >= 1) return interval + ' minute' + (interval > 1 ? 's' : '') + ' ago';
    return Math.floor(seconds) + ' second' + (seconds > 1 ? 's' : '') + ' ago';
};
export const formatTime = (date) =>
    new Date(date).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    });
export const mergeArrays = (arr1, arr2) => {
    const merged = [...arr1, ...arr2];
    return merged;
};
export const splitArray = (arr, index) => {
    const firstPart = arr.slice(0, index);
    const secondPart = arr.slice(index);
    return [firstPart, secondPart];
}
export const rotateArray = (arr, positions) => {
    const len = arr.length;
    const pos = positions % len;
    return arr.slice(-pos).concat(arr.slice(0, len - pos));
}
export const shuffleArray = (arr) => {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
export const capitalizeFirstLetter = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
};  
export const reverseString = (str) => str.split('').reverse().join('');
export const isPalindrome = (str) => {
    const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
    return cleaned === reverseString(cleaned);
}
export const countOccurrences = (arr, value) =>
    arr.reduce((count, current) => (current === value ? count + 1 : count), 0);
export const flattenObject = (obj, parentKey = '', result = {}) => {
    for (const key in obj) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            flattenObject(obj[key], newKey, result);
        } else {
            result[newKey] = obj[key];
        }
    }
    return result;
};  
export const unflattenObject = (obj) => {
    const result = {};                  
    for (const flatKey in obj) {
        const keys = flatKey.split('.');                    
        keys.reduce((acc, key, index) => {
            if (index === keys.length - 1) {
                acc[key] = obj[flatKey];
            } else {
                if (!acc[key]) acc[key] = {};
                return acc[key];
            }
            return acc;
        }, result);
    }
    return result;
};
