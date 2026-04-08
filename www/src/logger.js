export const logAction = (action, status, details = {}) => {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ACTION: ${action} | STATUS: ${status} | DETAILS: ${JSON.stringify(details)}`;
    
    console.log(logEntry); 
};