FROM ossrs/srs:5
COPY srs.conf /usr/local/srs/conf/srs.conf
CMD ["./objs/srs", "-c", "/usr/local/srs/conf/srs.conf"]