const BASE_API_URL = 'https://api.xrp.cafe'
const getBulkOffers = async (xrpAddress: string) => {
    try {
      let request = {"xrp_address": xrpAddress}
      let response = await fetch(BASE_API_URL + '/api/companion/getbulktxns', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(request)
      });

      let json = await response.json()
      return { success: true, data: json };
    } catch (error) {
      return { success: false };
    }
  }

  const submitTransactions = async (xrpAddress: string, transactions: string, id: string) => {
    try {
      let request = {"xrp_address": xrpAddress, "transactions": transactions, "id": id}
      let response = await fetch(BASE_API_URL + '/api/companion/submitTransactions', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(request)
      });

      let json = await response.json()
      return { success: true, data: json };
    } catch (error) {
      return { success: false };
    }
  }

  const getBulkTransactionStatus = async (id: number) => {
    try {
        let request = {"id": id}
      let response = await fetch(BASE_API_URL + '/api/getBulkTransactionStatus', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request)
      });
      let json = await response.json()
      return { success: true, data: json };
    } catch (error) {
      return { success: false };
    }
  }

  const rejectTransaction = async (id: number, xrp_address: string) => {
    try {
        let request = {"id": id, "xrp_address" : xrp_address}
      let response = await fetch(BASE_API_URL + '/api/companion/rejectBulkTransaction', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request)
      });
      let json = await response.json()
      return { success: true, data: json };
    } catch (error) {
      return { success: false };
    }
  }
  

  export const apiServices = {
    getBulkOffers,
    submitTransactions,
    getBulkTransactionStatus,
    rejectTransaction
  };