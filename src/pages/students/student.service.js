import { Pagination } from './consts'

const service = {
  getAllStudents: (pageNo = Pagination.pageNo) => {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve({
            data: transformStudentList(),
            pagination: {
              totalPage: 1,
              pageNo: 1,
              limit: 50,
              skip: 0,
              totalItemsInLastResponse: 1
            }
          })
        }, 1000)
      } catch (err) {
        reject(err)
      }
    })
  }
}

function transformStudentList () {
  return [
    {
      id: '1001',
      photo: null,
      firstName: 'Jahanzeb',
      lastName: 'Sethi',
      gender: 'Male',
      parentsName: 'Mubashar Ahmed Sethi',
      class: '9th',
      section: 'A',
      address: 'Lahore Punjab Pakistan',
      dob: '11-11-1995',
      mobileNo: '03110900052',
      email: 'jahanzebsethi@gmail.com',
    },
    {
      id: '1002',
      photo: null,
      firstName: 'Akash',
      lastName: 'Smark',
      gender: 'Male',
      parentsName: 'Smark Mark',
      class: '9th',
      section: 'A',
      address: 'Lahore Punjab Pakistan',
      dob: '11-11-1995',
      mobileNo: '03117041625',
      email: 'Akashkhan@gmail.com',
    },
    {
      id: '1003',
      photo: null,
      firstName: 'Babloo',
      lastName: 'Khan',
      gender: 'Male',
      parentsName: 'Ahmed Khan',
      class: '9th',
      section: 'A',
      address: 'Lahore Punjab Pakistan',
      dob: '11-11-1995',
      mobileNo: '03110900052',
      email: 'bablooKhan@gmail.com',
    },
    {
      id: '1004',
      photo: null,
      firstName: 'Bimar',
      lastName: 'jaan',
      gender: 'Male',
      parentsName: 'bob bob',
      class: '9th',
      section: 'A',
      address: 'Lahore Punjab Pakistan',
      dob: '11-11-1995',
      mobileNo: '03117041625',
      email: 'beemarjaan@gmail.com',
    },
    {
      id: '1005',
      photo: null,
      firstName: 'Jahanzeb',
      lastName: 'Sethi',
      gender: 'Male',
      parentsName: 'Mubashar Ahmed Sethi',
      class: '9th',
      section: 'A',
      address: 'Lahore Punjab Pakistan',
      dob: '11-11-1995',
      mobileNo: '03110900052',
      email: 'jahanzebsethi@gmail.com',
    },
    {
      id: '1006',
      photo: null,
      firstName: 'Akash',
      lastName: 'Smark',
      gender: 'Male',
      parentsName: 'Smark Mark',
      class: '9th',
      section: 'A',
      address: 'Lahore Punjab Pakistan',
      dob: '11-11-1995',
      mobileNo: '03117041625',
      email: 'Akashkhan@gmail.com',
    },
    {
      id: '1007',
      photo: null,
      firstName: 'Babloo',
      lastName: 'Khan',
      gender: 'Male',
      parentsName: 'Ahmed Khan',
      class: '9th',
      section: 'A',
      address: 'Lahore Punjab Pakistan',
      dob: '11-11-1995',
      mobileNo: '03110900052',
      email: 'bablooKhan@gmail.com',
    },
    {
      id: '1008',
      photo: null,
      firstName: 'Bimar',
      lastName: 'jaan',
      gender: 'Male',
      parentsName: 'bob bob',
      class: '9th',
      section: 'A',
      address: 'Lahore Punjab Pakistan',
      dob: '11-11-1995',
      mobileNo: '03117041625',
      email: 'beemarjaan@gmail.com',
    },
    {
      id: '1009',
      photo: null,
      firstName: 'Jahanzeb',
      lastName: 'Sethi',
      gender: 'Male',
      parentsName: 'Mubashar Ahmed Sethi',
      class: '9th',
      section: 'A',
      address: 'Lahore Punjab Pakistan',
      dob: '11-11-1995',
      mobileNo: '03110900052',
      email: 'jahanzebsethi@gmail.com',
    },
    {
      id: '1010',
      photo: null,
      firstName: 'Akash',
      lastName: 'Smark',
      gender: 'Male',
      parentsName: 'Smark Mark',
      class: '9th',
      section: 'A',
      address: 'Lahore Punjab Pakistan',
      dob: '11-11-1995',
      mobileNo: '03117041625',
      email: 'Akashkhan@gmail.com',
    },
  ]
}

export default service