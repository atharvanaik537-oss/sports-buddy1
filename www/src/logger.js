export const logAction = (action, status, details = {}) => {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ACTION: ${action} | STATUS: ${status} | DETAILS: ${JSON.stringify(details)}`;
    
    // In a professional app, this could also be sent to a remote logging service
    console.log(logEntry); 
};