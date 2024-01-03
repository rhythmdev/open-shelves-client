import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';


import { EffectCube, Pagination } from 'swiper/modules';


const ManageLibrary = () => {
    return (
        <div>
            <section className="py-8">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <>
                                <Swiper
                                    effect={'cube'}
                                    grabCursor={true}
                                    cubeEffect={{
                                        shadow: true,
                                        slideShadows: true,
                                        shadowOffset: 20,
                                        shadowScale: 0.94,
                                    }}

                                    modules={[EffectCube, Pagination]}
                                    className="mySwiper"
                                    style={{ width: '380px', height: '360px' }}
                                >
                                    <SwiperSlide>
                                        <img src="https://images.pexels.com/photos/1046125/pexels-photo-1046125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="https://images.pexels.com/photos/4390730/pexels-photo-4390730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
                                    </SwiperSlide>
                                </Swiper>
                            </>
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-lobster  text-gray-700 dark:text-gray-200 underline">Manage Your Library with Ease</h2>

                            <p className="mt-5 text-base md:text-lg lg:text-lg font-medium text-gray-700 dark:text-gray-200 ">
                                Open Shelves is a comprehensive library management system that allows users to register, borrow, and return books hassle-free. With our user-friendly interface, you can easily keep track of your library inventory and provide a seamless borrowing experience for your patrons.
                            </p>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManageLibrary;