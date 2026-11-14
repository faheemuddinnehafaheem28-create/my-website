function Footer(){
    return(
        <div style={{background: '#111827', color: 'white', padding: '40px 20px 20px',
            marginTop: '40px', width: '100vw', marginLeft: 'calc(-50vw + 50%)',
             boxSizing: 'border-box'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap',
                    gap: '30px', maxWidth: '1100px', margin: '0 auto', textAlign: 'left'
                }}>
                    {/*Logo Part*/}
                    <div style={{flex: '1', minWidth: '250px'}}>
                        <h2 style={{margin: '0', display: 'flex', alignItems: 'center', gap: '8px'}}>
                            <span style={{color: '#22c55e'}}>☘️</span><span style={{
                                color: 'white', fontSize: '22px', fontWeight: '800'
                            }}>PlantMatch</span>
                        </h2>
                        <p style={{color: '#9ca3af', fontSize: '14px', lineHeight: '1.6',
                            marginTop: '10px'}}>We help you find the perfect plant for your
                            space. Real care tips, real result.</p>
                    </div>
                    {/*Links*/}
                    <div style={{flex: '1', minWidth: '150px'}}>
                        <h4 style={{margin: '0 0 15px', fontSize: '16px'}}>Quick Links</h4>
                        <p style={{margin: '8px 0', color: '#9ca3af', fontSize: '14px',
                            cursor: 'pointer'}}>Home</p>
                            <p style={{margin: '8px 0', color: '#9ca3af', fontSize: '14px',
                            cursor: 'pointer'}}>How It Works</p>
                            <p style={{margin: '8px 0', color: '#9ca3af', fontSize: '14px',
                            cursor: 'pointer'}}>Why Us</p>
                            <p style={{margin: '8px 0', color: '#9ca3af', fontSize: '14px',
                            cursor: 'pointer'}}>Our Result</p>
                            <p style={{margin: '8px 0', color: '#9ca3af', fontSize: '14px',
                            cursor: 'pointer'}}>Testimonials</p>
                    </div>
                    {/*Contact*/}
                    <div style={{flex: '1', minWidth: '200px'}}>
                        <h4 style={{margin: '0 0 15px', fontSize: '16px'}}>Contact</h4>
                        <p style={{margin: '8px 0', color: '#9ca3af', fontSize: '14px'}}>
                            🎯Karachi, Pakistan</p>
                            <p style={{margin: '8px 0', color: '#9ca3af', fontSize: '14px'}}>
                            📩 hello@plantmatch.pk</p>
                            <div style={{display: 'flex', gap: '10px', marginTop: '15px'}}>
                                <div style={{width: '35px', height: '35px', background: '#22c55e',
                                    borderRadius: '50%', display: 'flex', justifyContent: 'center',
                                    alignItems: 'center', cursor: 'pointer'
                                }}>f</div>
                                <div style={{width: '35px', height: '35px', background: '#22c55e',
                                    borderRadius: '50%', display: 'flex', justifyContent: 'center',
                                    alignItems: 'center', cursor: 'pointer'
                                }}>in</div>
                                <div style={{width: '35px', height: '35px', background: '#22c55e',
                                    borderRadius: '50%', display: 'flex', justifyContent: 'center',
                                    alignItems: 'center', cursor: 'pointer'
                                }}>ig</div>
                            </div>
                    </div>

                </div>
                <div style={{borderTop: '1px solid #1f2937', marginTop: '30px', paddingTop: '15px',
                    textAlign: 'center', color: '#6b7280', fontSize: '13px', maxWidth: '1100px',
                    marginLeft: 'auto', marginRight: 'auto'
                }}>© 2026 PlantMatch. Made with 💚 in Pakistan.</div>
            </div>
    );
};
export default Footer